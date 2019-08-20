import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ProfileBar, ArrowDropDownIcon } from './ProfileBar'
import UserPic from '../UserPic'
import NewMessages from '.'
import data from '../../../Store/data.json'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const userData = data.results[3];
        return (
            <ProfileBar>
                <NewMessages />
                <p>{userData.name.first +' '+ userData.name.last}</p>
                <UserPic url={userData.picture.large} size="50px" />
                <ArrowDropDownIcon  size="32"/>
            </ProfileBar>
        )
    }
}
