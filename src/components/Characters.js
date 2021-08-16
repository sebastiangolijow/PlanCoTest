import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCharacters, GetMoreCharacters} from "../actions/actions";
import {Link} from 'react-router-dom';


const styleCard= {
  backgroundColor:'#0f0f0f', 
  width:'50%',
  height:'60px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  padding: '10px',
  alignSelf:'center',
  margin:'10px',
  borderRadius:'5px'
 }

 
const styleButton = {
  width:'20%',
  backgroundColor:'#9c9c9c',
  border: 'none',
  margin:'5px',
  padding:'5px',
  borderRadius:'5px'
}

 const styleName = {
  fontFamily:'arial',
  color:'#9c9c9c',
  fontSize:'15px',
  alignSelf:'flex-start',
  fontWeight:'50'

}
const styleModel = {
  fontFamily:'arial',
  color:'grey',
  fontSize:'11px',
  alignSelf:'flex-start',
  fontWeight:'50'

}

const LinkStyle = {
  textDecoration:'none'
}


const findNumber = (arg) => {let number = Array.from(arg).filter(Number); return number.join('')}

export function Characters() {
  const Characters = useSelector((state) => state.Characters);
  const dispatch = useDispatch();
  useEffect(() => dispatch(GetCharacters()), []);
  let [count, setCount] = useState(0);


  const handleClick = () => {
    setCount(count += 1)
    dispatch(GetMoreCharacters(count))
  }
  

  return (
   <div>
       <div  style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "20px",
        position:'relative',
        right:'5px',
        margin:'20px'
      }}>
      {Characters &&
        Characters.map((data, id) => (
          <Link style={LinkStyle} to={`/characters/${findNumber(data.url)}/`}>
          <div style={styleCard}>
          <h1 style={styleName}>Name:</h1>  <h1 style={styleModel}>{data.name}</h1>
          </div>
          </Link>
        ))}
    </div>

    <button style={styleButton} onClick={handleClick}>View More</button>

    </div>  
  );
}
