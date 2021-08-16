import { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import {getPilotos} from '../actions/actions'

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


export function Pilots(pilotos){
const dispatch = useDispatch();
const Statepilots = useSelector((state) => state.StatePilots)

useEffect(() => {
    console.log(pilotos.pilots)
   return pilotos.pilots.map(item => dispatch(getPilotos(item)));
}, [])
    return (
        <div>
        <h1 style={styleTitle}>Pilots</h1>

        {
          Statepilots &&
          Statepilots.map((item) => ( console.log(),
               <div>
                 <div style={styleDiv}>
                <h1 style={styleTag}>Name: {item.name}</h1>
                <h1 style={styleTag}>Gender: {item.gender}</h1>
              </div>
              </div>
             ))
          }
          </div>
    )
}