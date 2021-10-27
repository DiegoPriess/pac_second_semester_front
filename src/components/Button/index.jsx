import React from 'react';
import './style.scss';

const Button = (props) => {
    return (
        <button className={`${props.customClass} button`}>{ props.textButton }</button>
    );
}

export default Button;