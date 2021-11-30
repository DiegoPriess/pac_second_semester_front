import React, {useState, useEffect} from 'react';
import './style.scss';
import AccountCard from '../AccountCard';
import { get } from '../../api/api';

const Accounts = (props) => {

    const filterList = (list) => {
        return list.filter((account) => {return account.status === filterStatus && account.usuario.id === parseInt(localStorage.getItem('userId'))})
    }

    let filterStatus = props.type === "finish" ? "EFETIVADO" : "PENDENTE";

    const[accountList, setAccountList] = useState([])
  
    useEffect(() => {
      get(`/api/lancamentos/obterTodosLancamentos`, setAccountList);
    }, []);

    return (
        <div className="accounts">
            <i className="material-icons accounts-icon">{ props.type === "finish" ? "done" : "schedule"}</i>
            {filterList(accountList).map((account) => {
                return <AccountCard key={account.id} id={account.id} type={account.tipo} price={account.valor} description={account.descricao} date={`${account.mes}/${account.ano}`} isDone={account.status === "EFETIVADO"} />
            })}
        </div>
    );
}

export default Accounts;