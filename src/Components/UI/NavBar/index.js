import React, { Component } from 'react'
import data from '../../../Store/data.json'
import UserPic from '../UserPic'
import {NavBar, Wrap} from './NavBar'
import LogoBar from '../LogoBar'
import SearchBar from '../SearchBar'

export default class index extends Component {
    render() {
        const userData = data.results[3];
        return (
            <Wrap>
                <NavBar>
                    <LogoBar text="C0deNet"/>
                    <SearchBar />
                    <UserPic url={userData.picture.large} size="50px" />
                </NavBar>
            </Wrap>
        )
    }
}
