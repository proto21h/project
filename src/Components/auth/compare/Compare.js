import React, {Component} from 'react';

export default class Compare extends Component {
    
    render() {
        console.log(this.props.value1);
        console.log(this.props.value2);
        return (
            (this.props.value1 === this.props.Value2)
            ? <span>{this.props.Value2} is not mistmach!</span>
            : null)
    }
}