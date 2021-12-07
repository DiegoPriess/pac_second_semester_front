import React from 'react';
import './style.scss';

const AccountUpdateModal = (props) => {
    return (
        <div className="account-update-modal">
            <div className="account-update-modal-content">
                <div className="account-update-modal-text">
                    
                </div>
                <button onClick={() => {window.location.pathname = props.urlPath}}>Ok</button>
            </div>
        </div>
    );
}

export default AccountUpdateModal;