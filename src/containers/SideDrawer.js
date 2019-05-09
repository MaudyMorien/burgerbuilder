import React from 'react'
import Logo from '../components/Logo/Logo'
import NavigationItems from '../components/Navigation/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../components/UI/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </>
    )
}

export default sideDrawer