import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { Pilots } from "./Pilots.js";
import { getDetails } from "../actions/actions.js";
import { Movies } from "./Movies.js";


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

const styleCard = {
  backgroundColor:'#0f0f0f', 
  width:'50%',
  height:'60px',
  display:'flex',
  flexDirection:'column',
  alignItems:'flex-start',
  padding: '10px',
  alignSelf:'center',
  margin:'10px',
  borderRadius:'5px'
 }

export function Details({id}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDetails(id)), [])
  const Details = useSelector((state) => state.Detail);
  
  if(Details){
  return (
    <div >
      <h1 style={styleTitle}><strong>{Details.name}</strong></h1>
      <div style={styleDiv}>
      <div style={styleCard} >
          <h1 style={styleTag}>Model:</h1>
          <h1 style={styleTag}>{Details.model}</h1> 
          </div>

          <div style={styleCard} >
          <h1 style={styleTag}>Manufacturer:</h1>
          <h3 style={styleTag}>{Details.manufacturer}</h3> 
          </div>
     

          <div style={styleCard} >
          <h1 style={styleTag}>Cost in credits:</h1>
          <h3 style={styleTag}>{Details.cost_in_credits}</h3> 
          </div>

          <div style={styleCard} >
          <h1 style={styleTag}>Length:</h1>
          <h3 style={styleTag}>{Details.length}</h3>
          </div>


          <div style={styleCard} >
          <h1 style={styleTag}>Crew:</h1>
          <h3 style={styleTag}>{Details.crew}</h3>
          </div>

          <div style={styleCard} >
          <h1 style={styleTag}>Max Atmosphering Speed:</h1>
          <h3 style={styleTag}>{Details.max_atmosphering_speed}</h3>
          </div> 
           {
             Details.pilots &&
             <Pilots pilots={Details.pilots} />
           }
          {
             Details.films &&
             <Movies  films={Details.films} />
           }
        </div>
        </div>
  )} else {
    return null
  }
}
