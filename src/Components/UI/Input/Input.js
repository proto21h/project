import React from 'react';
import './Input.css';

export default class Input extends React.Component {

    render() {
        return (
            <div>
                <label 
                    htmlFor = {this.props.name}> 
                    {this.props.label} 
                </label>
                <input 
                    className="input" 
                    name= {this.props.name} 
                    type= {this.props.type} 
                    required={(this.props.required==="yes") ? true : false}
                    placeholder={this.props.text}
                />
            </div>
        )
    }
}