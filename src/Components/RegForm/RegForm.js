import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Label from '../UI/Label/Label';
// import Link from '../UI/Link/Link';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './RegForm.css'
// import Form from '../UI/Form/Form';

export default class RegForm extends Component {
    render() {
        return(
            <div className="reg-form">
                <form>
                    <h1 className="reg-header-title" >Register</h1>
                    <Input type="text" label="Login" required="yes"/>
                    <Input type="password" label="Password" required="yes"/>
                    <Input type="password" label="Re-type Password" required="yes"/>
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
