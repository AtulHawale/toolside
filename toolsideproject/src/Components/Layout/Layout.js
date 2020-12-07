import React, { Component } from 'react';
import classes from './Layout.module.css';
//import Auxc from '../../hoc/Auxc';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state={
        open:true
    };

    toggleSideDrawer = ()=>{
        this.setState({
            open : false
        });
    }

    openSideDrawer = ()=>{
        this.setState({
            open : true
        });
    }

    render(){
    return(
    <>
        <div >
            <Toolbar click={this.openSideDrawer}/>
            <SideDrawer open={this.state.open} click={this.toggleSideDrawer}/>
        </div>
        <main className={classes.Layout}>
            {this.props.children}
        </main>
    </>
    );
    }
}

export default Layout;
