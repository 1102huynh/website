import React from 'react';
import './signup.css';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom';
import Login from '../login/login';
import Header from '../header/header';
import Footer from '../footer/footer';

function Signup() {
    return (
        <div class="limiter">
			<Header></Header>
            <div class="container-login100">
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <span class="login100-form-title p-b-49">
						Sign up
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" placeholder="Type your username"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pass" placeholder="Type your password"/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
                    <div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Confirm Password</span>
						<input class="input100" type="password" name="pass" placeholder="Confirm your password"/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								sign up
							</button>
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
                    <Router>
                        <ul>
                            <Link to = "/login">Login</Link>
                        </ul>
                        <Route path = "/login" component = {Login} />
                    </Router>
					</div>
                </div>
            </div>
			<Footer></Footer>
        </div>
    );
}

export default Signup;