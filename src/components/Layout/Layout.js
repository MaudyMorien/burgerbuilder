import React from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar'

const layout = (props) => (
    <>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </>

)

export default layout