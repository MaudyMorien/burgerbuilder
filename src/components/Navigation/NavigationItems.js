import React from 'react'
import './NavigationItemStyle.css'
import NavigationItem from './NavigationItem'

const navigationItems = () => (

    <ul className='NavigationItems'>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/' active>Checkout</NavigationItem>

    </ul>
)

export default navigationItems