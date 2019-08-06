import React, { Component } from 'react'
import data from '../../../Store/profile.json'
import UserPic from '../UserPic'
import NavBar from './NavBar'
import LogoBar from '../LogoBar'
import SearchBar from '../SearchBar'

export default class index extends Component {
    render() {
        const userData = data.results[0];
        return (
            <NavBar>
                <LogoBar />
                <SearchBar />
                <UserPic url={userData.picture.thumbnail} />
            </NavBar>
        )
    }
}
