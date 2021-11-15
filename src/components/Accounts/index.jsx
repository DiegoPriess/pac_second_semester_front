import React from 'react';
import './style.scss';
import AccountCard from '../AccountCard';

const Accounts = (props) => {

    let accountList;

    if(props.accountType === "finish"){
        accountList = [{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta2", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta3", type: "positive", description: "teste", price: "450.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta4", type: "positive", description: "teste", price: "225.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta5", type: "positive", description: "teste", price: "200.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta6", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta7", type: "positive", description: "teste", price: "800.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta8", type: "positive", description: "teste", price: "1340.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta9", type: "positive", description: "teste", price: "700.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
        ];
    }else{
        accountList = [{title: "Conta1111111111111111111", type: "positive", description: "teeeeeeeeeeeeeeeeeeeeeeeeeeeeste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta2", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta3", type: "negative", description: "teste", price: "450.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta4", type: "positive", description: "teste", price: "225.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta5", type: "negative", description: "teste", price: "200.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta6", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta7", type: "positive", description: "teste", price: "800.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta8", type: "positive", description: "teste", price: "1340.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
            {title: "Conta9", type: "negative", description: "teste", price: "700.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
        ];
    }

    return (
        <div className="accounts">
            <i className="material-icons accounts-icon">{ props.accountType === "finish" ? "done" : "schedule" }</i>
            {accountList.map( (account, index) => {
                return <AccountCard key={index} title={account.title} type={account.type} price={account.price} description={account.description} date={account.date} isDone={props.accountType === "finish"} />
            })}
        </div>
    );
}

export default Accounts;