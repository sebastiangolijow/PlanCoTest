import './App.css';
import { Route} from "react-router-dom";
import {Nav} from './components/Nav'
import Home from './components/Home'
import {Details} from './components/Details'
import {Landing} from './components/Landing'
import {Characters} from './components/Characters'
import {Register} from './components/Register'
import {ActorDetails} from './components/ActorDetails'



function App() {


  return (
    <div className="App">
     <Route exact path='/' component={Register}/>
     <Route path='/' component={Nav}/>
     <Route exact path='/myVessels' component={Home} />
     <Route exact path='/landing' component={Landing}/>
     <Route exact path='/characters' component={Characters}/>
     <Route exact path='/vessels/:id' render={({match}) => <Details id={match.params.id}/>}/>
     <Route exact path='/characters/:id' render={({match}) => <ActorDetails id={match.params.id}/>}/>

    </div>
  );
}

export default App;
