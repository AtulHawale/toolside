import React,{Component} from 'react';
import Input from '../Input/Input';
//import Button from '../Button/Button';
import classes from './Auth.module.css';
import {connect} from 'react-redux';
import * as action from '../../Store/Actions/auth'
import { bindActionCreators } from 'redux';

class Auth extends Component{
    state = {
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'your email'
                },
                value:''
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'your password'
                },
                value:''
            }
        },
        isSignUp : false
    };

    inputchangeHandler = (event,inputIdentifier)=>{ // two way binding
       const updateControl = {
            ...this.state.controls
        };
        const updateControlv={
            ...updateControl[inputIdentifier]
        };
        updateControlv.value = event.target.value;
        updateControl[inputIdentifier]=updateControlv;
        this.setState(
            {controls:updateControl,isSignUp:true}
        );

    }

    submitHandler = (event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp);
        console.log("button press"); // 1...
    }

    render(){
        const formArray =[];

        for(let key in this.state.controls)
        {
            formArray.push({
                id:key,
                config:this.state.controls[key]
            });
        }

        const form = formArray.map((formElement)=>(
            <Input 
                key={formElement.id}
                elementType = {formElement.config.elementType}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                click = {(event)=>this.inputchangeHandler(event,formElement.id)}
            >
            </Input>
        ));

        //click = {(event)=>this.inputchangeHandler(event,formElement.id)

        return(
            <div className= {classes.Auth}>
                <form onSubmit={this.submitHandler}>
                {form}
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=>{ ///it gives us props by which we can dispach action..//
   // console.log("dispatch action called");//never execute
    return {
        onAuth:(email,password,isSignUp)=>{
        dispatch(action.authStart(email,password,isSignUp));
        console.log("action started");
        console.log("isSignup is ",isSignUp);
        }
    };
};


export default connect(null,mapDispatchToProps)(Auth);
//export default Auth;
