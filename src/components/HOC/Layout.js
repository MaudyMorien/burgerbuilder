import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../../containers/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler} />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className='Content'>
                    {this.props.children}
                </main>
            </>

        )
    }
}

export default Layout