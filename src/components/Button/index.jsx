import React from 'react';
import './style.scss';

const Button = (props) => {
    return (
        <button onClick={props.onClickFunction} className={`${props.customClass} button`}>{ props.textButton }</button>
    );
}

export default Button;