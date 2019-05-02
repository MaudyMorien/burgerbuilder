import React from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems'

const toolbar = (props) => (
    <header className='Toolbar'>
        <div>MENU</div>
        <Logo height="100%"/>
        <nav>
            <NavigationItems />
        </nav>
    </header>

)

export default toolbar