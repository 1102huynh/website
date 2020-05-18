import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../mystyle.css';

function Header(props){
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <Link to="/">
                    <img class = "logo" src={logo} alt = "logo"></img>
                </Link>
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;