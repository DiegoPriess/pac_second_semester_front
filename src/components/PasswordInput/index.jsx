import React, {useState} from 'react';
import './style.scss';

const PasswordInput = (props) => {
    const[inputType, setInputType] = useState("password");

    const toggleVisibility = () => {
        if(inputType === "password"){
            setInputType("text");
            document.getElementById(props.id).innerText = "visibility"
        }else{
            setInputType("password");
            document.getElementById(props.id).innerText = "visibility_off"
        }
    }

    return (
        <div className="password-input">
            <input type={inputType}/>
            <i id={props.id} className="material-icons" onClick={toggleVisibility}>visibility_off</i>
        </div>
    );
}

export default PasswordInput;