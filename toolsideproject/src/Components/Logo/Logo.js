import React from 'react';
import MyLogo from '../../assets/fblogo.png'
import classes from './Logo.module.css';

const Logo =(props)=>(
    <div className={classes.Logo}>
        <img src={MyLogo} alt="MyLogo"/>
    </div>
);

export default Logo;
