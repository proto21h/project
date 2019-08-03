import React from 'react';
import './Label.css';

export default class Label extends React.Component {

    render() {
        return (
                <span 
                    className ={this.props.css}
                    htmlFor = {this.props.name}
                > 
                    {this.props.value}
                    
                </span>
        )
    }
}