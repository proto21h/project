import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Label from '../UI/Label/Label';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './RegForm.css';

export default class RegForm extends Component {
    render() {
        return(
            <div className="reg-form">
                <form>
                    <h1 className="reg-header-title" >Register</h1>
                    <Input type="text" label="Login" required="yes" text="Enter username"/>
                    <Input type="password" label="Password" required="yes" text="Enter password"/>
                    <Input type="password" label="Re-type Password" required="yes" text="Re-type password"/>
                    <Button type="submit" title="Register" /> 
                    <div className="reg-footer-title">
                        <Label css="center" value="Alredady have account: "/> 
                        <Link className="link" to="/auth">Login</Link>
                    </div>
                </form>
            </div>
        )
    }
}
