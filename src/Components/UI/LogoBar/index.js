import React, { Component } from 'react'
import { Logo, Slogan } from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default class index extends Component {
    render() {
        return (
            <Logo> 
                <FontAwesomeIcon icon={faCode} size="2x"/>
                <Slogan>{this.props.text}</Slogan>
            </Logo>
        )
    }
}
