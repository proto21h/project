import React, { Component } from 'react';
import "./Auth.css";

export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            password: '123'
        };
        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler(e) {
        // const login = () => e.target.getElementByID('login').value;
        const login = (e) => e.target.getElementById('login').value;
        console.log(login)
    }

    registerHandler = () => {

    }

    authHandler = e => {
        e.preventDefault()
        console.log('Submited!')
    }

    render() {
        return(
            <div className = "auth-form">
                <form action="#" onSubmit = {this.loginHandler} >
                    <h2 className = "auth-header-title">Log in</h2>
                    <p>
                        <label htmlFor = "login">User name:</label><br/>
                        <input 
                            className = "auth-input" 
                            id = "login" 
                            type = "text" 
                            placeholder = "Enter your username" 
                            autoComplete = "off"
                        />
                    </p>
                    <p>
                        <label htmlFor = "password">Password:</label><br/>
                        <input 
                            className = "auth-input" 
                            id = "password" 
                            type = "password" 
                            placeholder = "Enter your password"
                        />
                    </p>
                    <p>
                        <label>
                            <input 
                                className = "checkbox" 
                                type = "checkbox" 
                                name = "showPassword"                        
                            />
                            Show password
                        </label>
                    </p>
                    <button 
                        className = "submint" 
                        type = "submit" 
                        id = "submit"
                        onClick = {this.loginHandler}
                    >
                        Login
                    </button>
                    <p className = "auth-footer-title">
                        Create an account 
                        <a href = "localhost" onClick = {this.registerHandler}> Registration </a>
                    </p>
                </form>
            </div>
        )
    }
}