import {Link, useHistory} from 'react-router-dom';

 const LinkStyle = {
    color:'#F5F5DC',
    textDecoration:'none',
    fontSize:'24px',
    border:'solid',
    padding: '10px',
    borderWidth:'1px',
    fontWeight:'50',
    fontFamily:'arial',
}
const Div = {
    border:'solid',
    borderWidth:'1px',
    borderColor:'#9C9C9C',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
}

const styleButton = {
    color:'#9c9c9c',
    backgroundColor:'rgba(0,0,0,0)',
    border:'none',
    position:'relative',
    left:'500px'
}
export function Nav() {

const history = useHistory();
const logOut = () => {
    window.localStorage.removeItem('key')
    history.push('/')
}


    return (
        <div>
        <Link style={{textDecoration:'none', border:'none', outline:'none'}} to='/'>
        <img src='https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg' alt='StarWars img' style={{height:'200px', width:'450px'}}/>
        </Link>
        <div style={Div}>
        <Link style={LinkStyle} to='/landing'>Home</Link>
        <Link style={LinkStyle} to='/myVessels'>STARSHIPS</Link>
        <button style={styleButton} onClick={logOut}>Log out</button>
        </div> 
        </div>
    )
}