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
            { props.inputType === "password" ? <PasswordInput id={props.id} inputValue={props.inputValue} onChangeFunction={props.onChangeFunction}/> : <Input id={props.id} inputValue={props.inputValue} onChangeFunction={props.onChangeFunction} readOnly={props.readonly} inputType={props.inputType}/>}
        </div>
    );
}

export default InputGroup;