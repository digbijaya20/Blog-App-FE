import React from 'react';
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom';
import './App.css';
import AddBlog from './Components/AddBlog';
import Home from './Components/Home';
import NavBar from './Components/NavBar';


function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      <Switch>
        
        <Route exact path='/addpost' component={AddBlog}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      
      </div>
      </Router>
   
  );
}

export default App;
