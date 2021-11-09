import React from 'react';
import './style.scss';

const Input = (props) => {
    return (
        <input className="input" id={props.id} type={props.inputType} />
    );
}

export default Input;