import React from 'react';
import './style.scss';

const AccountCard = (props) => {

    return (
        <div className="account-card">
            <p className="card-title">{props.title}</p>
            <i className={`${props.type} material-icons`}>{props.type === "negative" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <p className="description">{`${props.description}`}</p>
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