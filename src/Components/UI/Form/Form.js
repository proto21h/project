import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form> 
                <h1>{this.props.h_title}</h1>
            </form>)
    }
}
