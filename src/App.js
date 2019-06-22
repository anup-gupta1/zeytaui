import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/common/NavBar';
import LandingPage from './components/LandingPage'
import  './App.css';


class App extends Component {


  render() {
    return (
      
      <Router>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
      </Router>
    )
  }
}

export default  App;
