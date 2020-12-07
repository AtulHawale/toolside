import React from 'react';
import NavigationItem from '../../Navigation/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import Login from '../../Auth/Auth';

const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home">HOME</NavigationItem>
        <NavigationItem link="/task">TASK</NavigationItem>
        <NavigationItem link="/signup" >signup</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
    </ul>
    );

export default navigationItems;
