import React from 'react'
import classes from './NavigationItemStyle.module.css'
import NavigationItem from './NavigationItem'

const navigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/' active>Checkout</NavigationItem>

    </ul>
)

export default navigationItems