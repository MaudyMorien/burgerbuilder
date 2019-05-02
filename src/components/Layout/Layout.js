import React from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'

const layout = (props) => (
    <>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </>

)

export default layout