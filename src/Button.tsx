import React from 'react';
type ButtonType=
    {
        callback:()=>void
        disable:any
    }
    const Button = (props:ButtonType) => {
    return (
        <button disabled={props.disable} onClick={props.callback}>inc</button>
    );
};

export default Button;