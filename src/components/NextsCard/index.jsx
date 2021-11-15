import React from 'react';
import './style.scss';
import AccountCard from '../AccountCard';

const NextsCard = (props) => {


  let accountList;

  if(props.accountType === "negative"){
      accountList = [{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta2", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta3", type: "negative", description: "teste", price: "450.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta4", type: "negative", description: "teste", price: "225.00", date: "11/12/2010"},{title: "Conta1", type: "negative", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta5", type: "negative", description: "teste", price: "200.00", date: "11/12/2010"}
      ];
  }else{
      accountList = [{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta2", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta3", type: "positive", description: "teste", price: "450.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta4", type: "positive", description: "teste", price: "225.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta5", type: "positive", description: "teste", price: "200.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta6", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta7", type: "positive", description: "teste", price: "800.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta8", type: "positive", description: "teste", price: "1340.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
          {title: "Conta9", type: "positive", description: "teste", price: "700.00", date: "11/12/2010"},{title: "Conta1", type: "positive", description: "teste", price: "400.00", date: "11/12/2010"},
      ];
  }
    
  return (
    <div className="nexts-cards">
      <i className="material-icons accounts-icon">{props.accountType === "negative" ? "money_off" : "attach_money"}</i>
          {accountList.map( (account, index) => {
              return <AccountCard key={index} title={account.title} type={account.type}  description={account.description} price={account.price} date={account.date} />
          })}
    </div>
  );
}

export default NextsCard;