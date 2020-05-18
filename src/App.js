import React from 'react';
import './App.css';
import Home from './home/home';
import Signup from './signup/signup';
import MyForm from './login/login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AuthContext } from './authentication/auth';

function App() {
  return (

    <AuthContext.Provider value = {false}>

      <Router>
        <Route exact path = "/" component = {Home} />
        <Route path = "/home" component = {Home}/>
        <Route path = "/login" component = {MyForm} />
        <Route path = "/signup" component = {Signup} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
