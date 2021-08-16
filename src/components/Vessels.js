import { useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import {getVehicles } from '../actions/actions'

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
    display:'flex',
  }


export function Vessels(vessels){
const dispatch = useDispatch();
const Statevessels = useSelector((state) => state.StateVessels)

useEffect(() => {
    console.log(vessels.vessels)
   return vessels.vessels.map(item => dispatch(getVehicles(item)));
}, [])
    return (
        <div style={{marginRight:'100px'}}>
        <h1 style={styleTitle}>Vessels</h1>

        {
          Statevessels &&
          Statevessels.map((item) => ( console.log(),
               <div>
                 <div style={styleDiv}>
                <h1 style={styleTag}>Name: {item.name}</h1>
              </div>
              </div>
             ))
          }
          </div>
    )
}