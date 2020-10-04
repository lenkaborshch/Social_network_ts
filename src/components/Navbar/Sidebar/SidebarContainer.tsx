import React from 'react'
import {Sidebar} from "./Sidebar"
import {AppStateType} from "../../../redux/reduxStore"
import {connect} from "react-redux"

const mapStateToProps = (state: AppStateType) => ({
    friends: state.sidebar.friends
})

export const SidebarContainer = connect(mapStateToProps)(Sidebar)