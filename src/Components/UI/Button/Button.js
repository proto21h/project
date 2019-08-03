import React from 'react';
import './Button.css'

export default class Button extends React.Component {
    render() {
        return (
            <button 
                className="submit" 
                type={this.props.type}
                > 
                {this.props.title} 
            </button>
        )
    }
}
