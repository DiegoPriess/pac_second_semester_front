import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const CustomAlert = (props) => {

    return (
        <div className="alert">
            <div className="alert-content">
                <div className="alert-text">
                    <i className="material-icons"></i><i className={`${props.type} material-icons`}>{props.type === "negative" ? "cancel" : "check_circle"}</i>
                    <label>conta criada tats sa asaas </label>
                </div>
                <Link to="/menu"><button>Ok</button></Link>
            </div>
        </div>
    );
}

export default CustomAlert;