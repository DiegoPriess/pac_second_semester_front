import React from 'react';
import './style.scss';

const Input = (props) => {
    return (
        <input className="input" type={props.inputType} />
    );
}

export default Input;