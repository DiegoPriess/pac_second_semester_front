import React from 'react';
import './style.scss';

const AccountCard = (props) => {

    return (
        <div className="account-card">
            <div className="right">
                <div className="tooltip">
                    <p className="card-title">{props.title}</p>
                    <span class="tooltiptext">{props.title}</span>
                </div>
            </div>
            <i className={`${props.type} material-icons`}>{props.type === "negative" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <div className="left">
                <div className="tooltip">
                    <p className="description">{props.description}</p>
                    <span class="tooltiptext">{props.description}</span>
                </div>
            </div>
            <p className="date">{props.date}</p>
            <div className="actions">
                {!props.isDone ? <i className="material-icons done">done</i> : ""}
                <i className="material-icons close">close</i>
                <i className="material-icons edit">edit</i>
            </div>
        </div>
    );
}

export default AccountCard;