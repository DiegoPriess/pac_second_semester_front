import React, { useEffect, useState } from 'react';
import './style.scss';
import AccountCard from '../AccountCard';
import { get } from '../../api/api';

const NextsCard = (props) => {

    const filterList = (list) => {
        return list.filter((account) => {return account.tipo === filterType && account.usuario.id === parseInt(localStorage.getItem('userId')) && account.status !== "CANCELADO"})
    }

    let filterType = props.type === "negative" ? "DESPESA" : "RECEITA";

    const[accountList, setAccountList] = useState([])

    useEffect(() => {
        get(`/api/lancamentos/obterTodosLancamentos`, setAccountList);
    }, []);

    return (
        <div className="nexts-cards">
            <i className={`${props.type} material-icons accounts-icon`}>{ props.type === "negative" ? "money_off" : "attach_money "}</i>
            {filterList(accountList).map((account) => {
                return <AccountCard key={account.id} id={account.id} type={account.tipo} price={account.valor} description={account.descricao} date={`${account.mes}/${account.ano}`} isDone={account.status === "EFETIVADO"} />
            })}
        </div>
    );
}

export default NextsCard;