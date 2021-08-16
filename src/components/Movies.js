import { useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import {getMovies} from '../actions/actions'

const styleTag = {
    fontFamily:'arial',
    color:'#9c9c9c',
    fontSize:'15px',
    fontWeight:'50',
    margin:'5px'
  }
  
  const styleTitle = {
    fontFamily:'arial',
    color:'#9c9c9c',
    fontSize:'30px',
    fontWeight:'70',
    margin:'15px',
  }
  

  const styleDiv = {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
  
  }


export function Movies(movies){
const dispatch = useDispatch();
const Statemovies = useSelector((state) => state.StateMovies)

useEffect(() => {
   return movies.films.map(item => dispatch(getMovies(item)));
}, [])
    return (
        <div>
        <h1 style={styleTitle}>Movies</h1>

        {
          Statemovies &&
          Statemovies.map((item) => ( 
               <div>
                 <div style={styleDiv}>
                <h1 style={styleTag}>Director: {item.director}</h1>
                <h1 style={styleTag}>Title: {item.title}</h1>
                <h1 style={styleTag}>Release Date: {item.release_date}</h1>
              </div>
              </div>
             ))
          }
          </div>
    )
}