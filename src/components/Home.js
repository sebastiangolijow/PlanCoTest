import {useSelector, useDispatch } from "react-redux";
import { GetVessels, GetVesselsNext, getUser } from "../actions/actions";
import { Link, useHistory} from "react-router-dom";
import { useEffect, useState } from "react";

const styleName = {
  fontFamily:'arial',
  color:'#9c9c9c',
  fontSize:'15px',
  fontWeight:'50',
  alignSelf:'flex-start',

}

const styleButton = {
  width:'20%',
  backgroundColor:'#9c9c9c',
  border: 'none',
  margin:'5px',
  padding:'5px',
  borderRadius:'5px'
}
const styleModel = {
  fontFamily:'arial',
  color:'grey',
  alignSelf:'flex-start',
  fontSize:'11px',
  fontWeight:'50'
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

const LinkStyle = {
  textDecoration:'none'
}

const findNumber = (arg) => {let number = Array.from(arg).filter(Number); return number.join('')}

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => dispatch(GetVessels()), []);
  const AllVessels = useSelector((state) => state.AllVessels);
  const user = useSelector((state) => state.User);
  let [count, setCount] = useState(2);
  useEffect(() => dispatch(getUser()), []);


  const handleClick = () => {
    setCount(count += 1);
    count === 5 ? alert('no more vessels') : dispatch(GetVesselsNext(count));
  }

  const prev = () => {
    setCount(count -= 1);
    count === 1 ? alert('no more vessels') : dispatch(GetVesselsNext(count));
  }
   if(user){
    return (
      <div
        style={{
          display: "flex",
          flexDirection:'column',
          justifyContent:'center',
          padding: "20px",
        }}
      >
      <button style={styleButton} onClick={prev}>View Less</button>

        { 
        AllVessels &&
          AllVessels.map((vessel, id) => (
          <div style={styleCard}>
          <Link style={LinkStyle} to={`/vessels/${findNumber(vessel.url)}/`}>
          <h1 style={styleName}>{vessel.name.toUpperCase()}</h1>
          <h1 style={styleModel}>{vessel.model.toUpperCase()}</h1>
          </Link>
          </div>
          ))}

         <button style={styleButton} onClick={handleClick}>View More</button>
      </div>
      )
   } else {
     return (
       <div style={styleCard}>
       <h1 styl={styleModel}>Log In</h1>
       <button style={styleButton} onClick={() => history.push('/')}>Go to login</button>
       </div>
     )
   }
  }
    


export default Home;
