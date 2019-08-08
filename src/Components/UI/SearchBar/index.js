import React, { Component } from 'react'
import {Search} from './Search'

export default class index extends Component {
    render() {
        return (
            <div>
                <form>
                    <Search type="search" placeholder="Search..." />
                </form>
            </div>
        )
    }
}
