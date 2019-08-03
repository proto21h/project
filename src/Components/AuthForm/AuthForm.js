import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Label from '../UI/Label/Label';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './AuthForm.css'
// import Form from '../UI/Form/Form';

export default class AuthForm extends Component {
    render() {
        return(
            <div className="auth-form">
                <form>
                    <h1 className="auth-header-title" >Login</h1>
                    <Input type="text" label="Login" required="yes" />
                    <Input type="password" label="Password" required="yes" />
                    <Button type="submit" title="Login" /> 
                    <div className="auth-footer-title">
                        <Label css="center" value="Create an account: "/> 
                        <Link className="link" to="/reg">Register</Link>
                        
                    </div>
                </form>
            </div>
        )
    }
}
