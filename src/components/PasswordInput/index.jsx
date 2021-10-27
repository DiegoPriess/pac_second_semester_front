import React, {useState} from 'react';
import './style.scss';

const PasswordInput = () => {

    const[inputType, setInputType] = useState("password");

    const toggleVisibility = () => {
        document.querySelector('.password-input input').focus();
        
        if(inputType === "password"){
            setInputType("text");
            document.querySelector('.password-input i').innerText = "visibility"
        }else{
            setInputType("password");
            document.querySelector('.password-input i').innerText = "visibility_off"
        }
    }

    return (
        <div className="password-input">
            <input type={inputType}/>
            <i className="material-icons" onClick={toggleVisibility}>visibility_off</i>
        </div>
    );
}

export default PasswordInput;