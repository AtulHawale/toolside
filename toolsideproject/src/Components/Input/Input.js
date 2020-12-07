import React from 'react';

const Input=(props)=>{
    let inputElement = null;
    switch(props.elementType)
    {
         case 'input':
            inputElement = <input value={props.value} {...props.elementConfig} onChange={props.click}/>;
            break;
        default :
            inputElement = <input {...props} />;
            break;          
    }
    return(
        <div>
            {inputElement}
        </div>
    );



}

export default Input;
