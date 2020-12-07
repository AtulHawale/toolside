import React, { Component } from 'react';
import Task from '../Task/Task';
import axios from 'axios';

class Tasks extends Component{

    state ={
        data:[],
        flag:1
    }

    a=1;

    deleteHandler = (index)=>{
        console.log("delete handler called with id",index);
        const datas = this.state.data;
        datas.splice(index,1);
        this.setState({
            data: datas
        })

    }

    componentDidMount(){
        if(this.a)
        {
        axios.get('http://jsonplaceholder.typicode.com/todos').then(
            res=>{
                console.log(res.data);
                this.setState({
                    data:res.data,
                    flag:0
                })
            }
        );
        this.a=0;
        }

    }

    render(){

        const Taskc = this.state.data.map((dat,index)=>{
            return <Task id={dat.id} name={dat.title} comp={dat.completed} key={dat.id} clicked={this.deleteHandler.bind(this,index)}/>
        });

        return(
            <>
            {Taskc}
            </>
        )
    }
}

export default Tasks;
