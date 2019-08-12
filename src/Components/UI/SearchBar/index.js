import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons'
import {SearchInput, SearchIcon} from './Search'

export default class index extends Component {
    render() {
        return (
            <div>
                <form>
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                    <SearchIcon size="32"/>
                    <SearchInput type="search" placeholder="Search..." />
                </form>
            </div>
        )
    }
}
