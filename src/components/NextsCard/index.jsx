import React, { useEffect, useState } from 'react';
import './style.scss';
import AccountCard from '../AccountCard';
import { api } from '../../api/api';

const NextsCard = (props) => {

    const[accountList, setAccountList] = useState([])
  
    useEffect(() => {
        api.get(`account/getByType/${props.type}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`, setAccountList).then((response) => {
            setAccountList(response.data.result);
        })
    }, []);

    return (
        <div className="nexts-cards">
            <i className={`${props.type} material-icons accounts-icon`}>{ props.type == "negative" ? "money_off" : "attach_money "}</i>
            {accountList.length > 0 ? accountList.map((account) => {
                return <AccountCard key={account.id} id={account.id} type={account.type} price={account.price} description={account.description} date={`${account.month}/${account.year}`} isDone={account.status === "EFETIVADO"} />
            }) : <p class="empty">Nenhuma conta encontrada</p> }
        </div>
    );
}

export default NextsCard;