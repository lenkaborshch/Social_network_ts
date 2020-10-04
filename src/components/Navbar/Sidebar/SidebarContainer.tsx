import React from 'react'
import {Sidebar} from "./Sidebar"
import {StoreContext} from "../../../StoreContext"

type SidebarPropsType = {}

export function SidebarContainer(props: SidebarPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => <Sidebar friends={store.getState().sidebar.friends}/>}
        </StoreContext.Consumer>
    )
}