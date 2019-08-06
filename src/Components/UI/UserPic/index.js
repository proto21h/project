import React, { Component } from 'react'
import defaultImage from '../UserPic/default.jpg'
import UserPic from './UserPic';

export default class index extends Component {
    render() {
        return (
        <div>
            <UserPic src={(this.props.url) ? this.props.url : defaultImage} size={this.props.size} alt="Avatar"/>
        </div>
        )
    }
}