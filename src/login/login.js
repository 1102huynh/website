import React from 'react';
import './login.css';
import './main.css';
import './util.css';
import './images/icons/favicon.ico';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.css';
import './vendor/daterangepicker/daterangepicker.css';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data);
        
        fetch('/home', {
            method : "POST",
            body : data,
            headers : {'Content-type': 'multipart/form-data' }
        }); 
    }

    render() {
        return (
            <div class="limiter">
                <Header></Header>
                <div class="container-login100">
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <span class="login100-form-title p-b-49">
                            Login
                        </span>
                        <form onSubmit ={this.handleSubmit}>
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
                        
                        <div class="text-right p-t-8 p-b-31">
                            <Link to = "/forgot_password">Forgot password</Link>
                        </div>
                        
                        <div class="container-login100-form-btn">
                            <div class="wrap-login100-form-btn">
                                <div class="login100-form-bgbtn"></div>
                                <button class="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </div>
                        </form>
                        <div class="txt1 text-center p-t-54 p-b-20">			
                            <Link to = "/signup">Or Sign up using</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
      }
}

  export default MyForm;