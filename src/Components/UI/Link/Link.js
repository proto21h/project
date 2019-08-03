import React from 'react';
import './Link.css';

export default class Link extends React.Component {

    render() {
        return (
                <a className="link" href={this.props.url}> {this.props.text} </a>
        )
    }
}