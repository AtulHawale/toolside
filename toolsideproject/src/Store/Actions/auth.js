import * as actionType from './actionTypes';

export const authStart = (email,password,isSignUp) =>{  ///action creator file//
    console.log("authStart working"); //2...
    console.log(email);
    console.log(password);
    console.log(isSignUp);
    return{
        type:actionType.AUTH_START
    
    }
}
