import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { Vessels } from "./Vessels";
import { getActorDetails} from "../actions/actions.js";
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

const Div = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center'
}

const styleDiv = {
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'

}

export function ActorDetails({id}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getActorDetails(id)), [])
  const ActorDetails = useSelector((state) => state.ActorDetails);
  
  if(ActorDetails){
  return (
    <div>
      <h1 style={styleTitle}><strong>{ActorDetails.name}</strong></h1>
      <div style={styleDiv}>
          <div style={Div}>
          <h1 style={styleTag}>Name:</h1>
          <h1 style={styleTag}>{ActorDetails.name}</h1> 
          </div>

          <div style={Div}>     
          <h1 style={styleTag}>Height:</h1>
          <h3 style={styleTag}>{ActorDetails.height}</h3> 
          </div>
     

          <div style={Div}>
          <h1 style={styleTag}>Mass:</h1>
          <h3 style={styleTag}>{ActorDetails.mass}</h3> 
          </div>

          <div style={Div}>
          <h1 style={styleTag}>Hair color:</h1>
          <h3 style={styleTag}>{ActorDetails.height_color}</h3>
          </div>


          <div style={Div}>
          <h1 style={styleTag}>Skin Color:</h1>
          <h3 style={styleTag}>{ActorDetails.skin_color}</h3>
          </div>

          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
           { console.log(ActorDetails.starships), 
             ActorDetails.starships &&
             <Vessels vessels={ActorDetails.starships} />
           }
          {
             ActorDetails.films &&
             <Movies  films={ActorDetails.films} />
           }
           </div>
        </div>
        </div>
  )} else {
    return null
  }
}
