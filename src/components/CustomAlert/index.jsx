import React from 'react';
import './style.scss';

const CustomAlert = (props) => {
    const closeAlert = () => {
        document.querySelector(".alert").style.display = "none";
    }

    return (
        <div className="alert">
            <div className="alert-content">
                <div className="alert-text">
                    <i className="material-icons"></i><i className={`${props.type} material-icons`}>{props.type === "negative" ? "cancel" : "check_circle"}</i>
                    <label>conta criada tats sa asaas </label>
                </div>
                <button onClick={closeAlert}>Ok</button>
            </div>
        </div>
    );
}

export default CustomAlert;