import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button> {this.props.title} </button>
            </div>
        )
    }
}