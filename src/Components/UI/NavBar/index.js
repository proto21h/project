import React, { Component } from 'react'
import {NavBar, Wrap} from './NavBar'
import LogoBar from '../LogoBar'
import SearchBar from '../SearchBar'
import ProfileBar from '../ProfileBar'

export default class index extends Component {
    render() {
        return (
            <Wrap>
                <NavBar>
                    <LogoBar text="C0deNet"/>
                    <SearchBar />
                    <ProfileBar/>
                    
                </NavBar>
            </Wrap>
        )
    }
}
