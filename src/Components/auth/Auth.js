import React, { Component } from 'react';
import Compare from './compare/Compare';
import "./Auth.css";

export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            isAuthForm: true,      // 
            showPassword: 'password',
            showPass: false,
            login: '',
            password1: '',
            password2: '',
        };
        // this.loginHandler = this.loginHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.changeFormHandler = this.changeFormHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    // loginHandler(e) {
    //     console.log()
    // }

    changeFormHandler = (e) => {
        // let is_auth = this.state.isAuthForm;
        this.setState({
            isAuthForm: !this.state.isAuthForm,
        });
        e.preventDefault();
    }

    submitHandler(e) {
        console.log('Login: ' + this.state.login);
        console.log('Password 1: ' + this.state.password1);
        console.log('Password 2: ' + this.state.password2);
        e.preventDefault();
    }

    changeHandler(e) {
        
        if (e.target.type === 'checkbox') {   // checking what value of element was changed
                if (e.target.checked)       // if is it checkbox, then we show or hide pass
                    this.setState({showPassword: 'text'})
                else  
                    this.setState({showPassword: 'password'})
            } 
            else
                this.setState({[e.target.name]: e.target.value}); //if is it input fields, then we render tham with new values
    
        
    }

    render() {
        let password2, 
            titleFooterForm,
            titleLinkFrom,
            titleHeaderForm;   // draw & show 2-nd password field if change form type
        if (!this.state.isAuthForm) {  //if is it registration form render 2-nd password field
            password2 = 
            <p>
                <label htmlFor = "password2">Re-type Password:</label><br/>
                <input 
                className = "auth-input" 
                name = "password2"
                type = {this.state.showPassword}
                value = {this.state.password}
                onChange = {this.changeHandler} 
                placeholder = "Re-Enter password"
                />
                <Compare value1={this.state.password1} value2={this.state.password2}/>
            </p>
            titleHeaderForm = 'Registration';
            titleLinkFrom = 'Login';
            titleFooterForm = 'Already have account: ';
        }   else {
            titleHeaderForm = 'Log in';
            titleLinkFrom = 'Registration';
            titleFooterForm = 'Create an account: ';
        }
    

        return(
            <div className = "auth-form">
                <form onSubmit = {this.submitHandler} >
                    <h2 className = "auth-header-title">{titleHeaderForm}</h2>
                    <p>
                        <label htmlFor = "login">User name:</label><br/>
                        <input 
                            className = "auth-input" 
                            id = "login"
                            name = "login" 
                            type = "text" 
                            value = {this.state.login}
                            onChange = {this.changeHandler}
                            placeholder = "Enter your username" 
                            autoComplete = "off"
                        />
                    </p>
                    <p>
                        <label htmlFor = "password">Password:</label><br/>
                        <input 
                            className = "auth-input" 
                            id = "password" 
                            name = "password1"
                            type = {this.state.showPassword}
                            value = {this.state.password}
                            onChange = {this.changeHandler} 
                            placeholder = "Enter your password"
                        />
                    </p>

                    {password2}

                    <p>
                        <label>
                            <input 
                                className = "checkbox" 
                                type = "checkbox" 
                                name = "showPassword"  
                                checked = {this.state.hiddenPass}
                                onChange = {this.changeHandler}                      
                            />
                            Show password
                        </label>
                    </p>
                    <button 
                        className = "submit" 
                        type = "submit" 
                        id = "submit"
                        name = "submit"
                        onClick = {this.loginHandler}
                    >
                        Login
                    </button>
                    <p className = "auth-footer-title">
                        {titleFooterForm} 
                        <a href = "/" onClick = {this.changeFormHandler}> {titleLinkFrom} </a>
                    </p>
                </form>
            </div>
        )
    }
}