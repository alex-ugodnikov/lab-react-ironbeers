import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import Home from './components/Home'

function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      <header className="App-header">
        {window.location.pathname === '/' ? 'Welcome to Ironbeers' :  <a href="/">Home</a>}          
      </header>
      <div className="page-container">
      <Switch>

      <Route path="/beers">

      </Route>

      <Route path="/">
        <Home />
      </Route> 

      </Switch>
      </div>
    </div>
  );
}

export default App;
