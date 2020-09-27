import React from 'react';
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom';
import './App.css';
import AddBlog from './Components/AddBlog';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import BlogState from './context/blogState';


function App() {
  return (
    <BlogState>
    <Router>
    <div>
      <NavBar/>
      <Switch>
        
        <Route exact path='/addpost' component={AddBlog}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Blogs/>
      
      </div>
      </Router>
      </BlogState>
   
  );
}

export default App;
