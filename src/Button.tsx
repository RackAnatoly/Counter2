import React from 'react';
type ButtonType=
    {
        callback:()=>void
        disable:any
        name:string
    }
    const Button = (props:ButtonType) => {
    return (
        <button disabled={props.disable} onClick={props.callback}>{props.name}</button>
    );
};

export default Button;