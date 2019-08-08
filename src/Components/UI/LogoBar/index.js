import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from './Logo'

 
export default class index extends Component {
    render() {
        return (
            <Logo> 
                <h1>
                    <FontAwesomeIcon icon="coffee" />
                </h1>
            </Logo>
        )
    }
}
