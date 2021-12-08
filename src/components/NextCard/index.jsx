import React, { useEffect, useState } from 'react';
import './style.scss';
import AccountCard from '../AccountCard';
import { api } from '../../api/api';
import { formateDate } from '../../utils';

const NextCard = (props) => {

    const[accountList, setAccountList] = useState([])
  
    useEffect(() => {
        api.get(`account/getByType/${props.type}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`, setAccountList).then((response) => {
            setAccountList(response.data.result);
        })
    }, [props.type]);

    return (
        <div className="next-cards">
            <i className={`${props.type} material-icons accounts-icon`}>{ props.type === "negative" ? "money_off" : "attach_money "}</i>
            {accountList?.length > 0 ? accountList.map((account) => {
                return <AccountCard key={account.id} id={account.id} type={account.type} price={account.price} description={account.description} date={`${formateDate("pt", account.date)}`} isDone={account.status === "finish"} />
            }) : <p className="empty">Nenhuma conta encontrada</p> }
        </div>
    );
}

export default NextCard;