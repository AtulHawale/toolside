import React from 'react';
import classes from './Task.module.css';


const task =(props)=>{

        return(
        <>
        <div className={classes.Task}>
        <div>{props.id}.</div>
        <div className={classes.space1}>{props.name}</div>
        <button className={classes.button} onClick={props.clicked}>Delete</button>
        </div>
        <button className={classes.Add}>Add+</button>
        </>
        );
}


export default task;


