import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Router, Redirect ,Link} from '@reach/router'
import Home from "./views/homePage"
import SinglePet from './views/singlePet'
import Create from "./views/createPet"
import Edit from "./views/editPet"

function App() {
  return (
    <div className="App">
      <Link to='/'>Back to home</Link>
      <h1>Pet Shelter</h1>
     <Router>
       <Home path="/"/>
       <Edit path="/pets/:id/edit"/>
       <SinglePet path="/pets/:id"/>
       <Create path="/pets/new"/>
       <Redirect from="/processing" to='/' noThrow/>
     </Router>
    </div>
  );
}

export default App;
