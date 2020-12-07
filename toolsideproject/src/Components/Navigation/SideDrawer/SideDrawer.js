import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer = (props)=>{
    //add css classes for opening and closing of sidedrawer//
    var attachedClasses =[classes.SideDrawer, classes.Close]
    if(props.open)
    attachedClasses=[classes.SideDrawer, classes.Open]
    return(
        <div >
            <Backdrop show={props.open} clicked={props.click}/>
            <div className={attachedClasses.join(' ')}>
            <div>
                Logo aayega
           </div>
            <nav>
                <NavigationItems/>
            </nav>
            </div>
        </div>
    );
}

export default sideDrawer;
