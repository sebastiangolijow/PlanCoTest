import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';


const InputStyle = {
    borderRadius: "5px",
    width: "50%px",
    height: "20px",
    outline: "none",
    decoration:'none',
    border:'none',
    marginRight: "20px",
  };

  const styleButton = {
    borderRadius: "5px",
    backgroundColor: "#9c9c9c",
    outline: "none",
    fontFamily: "arial",
    height:'20px',
    width:"65px",
};

export function Register() {

const [Input, setInput] = useState({ input: ""});
const history = useHistory();


const register = (user) => {
  window.localStorage.setItem('key', JSON.stringify(user))
}

function handlechange1(e) {
    console.log(Input.input)
    setInput({ ...Input, [e.target.name]: e.target.value });
}

function  handlesubmit(e) {
e.preventDefault();
if(!Input.input){
  return alert('Debes elgir un user name')
}
  register(Input.input);
  setInput({input:''});
  alert('User creado');
  history.push('/landing')
}

  return (
    <div class='home'>
    <h1>Register</h1>
      <div class="main">
         <div>
            <div class="login-form">
               <form>   
                <label>Usuario</label>
                <input
                value={Input.input}
                name="input"
                onChange={handlechange1}
                 style={InputStyle}
                 placeholder='usuario'
                 />
               <button style={styleButton} type="submit" class="btn btn-secondary" onClick={handlesubmit}> Register</button>
               </form>
               </div>
         </div>
        <div>
        <div>
        </div>
      </div>
      </div>
    </div>
  )
}