import React from 'react';
import './style.scss';

const CustomAlert = (props) => {
    return (
        <div className="alert">
            <div className="alert-content">
                <div className="alert-text">
                    <i className="material-icons"></i><i className={`${props.type} material-icons`}>{props.type === "negative" ? "cancel" : "check_circle"}</i>
                    <label>{props.labelText}</label>
                </div>
                <button onClick={() => {window.location.pathname = props.urlPath}}>Ok</button>
            </div>
        </div>
    );
}

export default CustomAlert;