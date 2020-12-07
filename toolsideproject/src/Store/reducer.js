import * as actionType from './Actions/actionTypes';
//import {updateObject} from './utility';

const intialState ={
    toekn:null,
    userId:null,
    isLogin:false
}

const authStart =(state,action)=>{ // here state us updated now....
    console.log("reducer:authstart in reducer");
    return {
        ...state,
        toekn:'1234',
        userid:'Atul',
        isLogin:true
    };
};

const reducer =(state=intialState,action)=>{  //3. after action creator execute..
    console.log("reducer:reducer is called");
    switch(action.type){
        case actionType.AUTH_START:
            {
            console.log("reducer:Auth Start select");
            return authStart(state,action);
            }
       /* default:
            return authStart(state,action);*/
    };
};

export default reducer;