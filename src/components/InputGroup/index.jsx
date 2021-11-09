import React from 'react';
import Input from '../Input';
import PasswordInput from '../PasswordInput';
import './style.scss';

const InputGroup = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.id}>
                {props.icon ? <i className="material-icons">{ props.icon }</i> : "" } 
                <span>{props.labelText}</span>
            </label>
            { props.inputType === "password" ? <PasswordInput id={props.id}/> : <Input id={props.id} inputType={props.inputType}/>}
        </div>
    );
}

export default InputGroup;