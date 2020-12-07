import React, { Component } from 'react';
import Task from '../Task/Task';

class Tasks extends Component{

    state ={
        data:[{
            id:1,
            name:"Atul",
            contact:"987654567"

        },{
            id:2,
            name:"rahul",
            contact:"99766544"

        },{
            id:3,
            name:"nakul",
            contact:"965343"
        },{
            id:4,
            name:"paidy",
            contact:"467988867"
        }]
    }

    render(){
        const Taskc = this.state.data.map(dat=>{
            return <Task id={dat.id} name={dat.name} contact={dat.contact}/>
        });

        return(
            <>
            {Taskc}
            </>
        )
    }
}

export default Tasks;
