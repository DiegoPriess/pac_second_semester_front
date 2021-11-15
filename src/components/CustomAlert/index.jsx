import React from 'react';
import './style.scss';

const CustomAlert = (props) => {
    return (
        <div className="alert">
            <div className="alert-content">
                <div class="alert-text">
                    <i className="material-icons"></i><i className={`${props.type} material-icons`}>{props.type === "negative" ? "cancel" : "check_circle"}</i>
                    <label>conta criada tats sa asaas </label>
                </div>
                <button>Ok</button>
            </div>
        </div>
    );
}

export default CustomAlert;