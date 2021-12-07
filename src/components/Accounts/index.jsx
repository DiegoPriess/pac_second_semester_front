import React, {useState, useEffect} from 'react';
import './style.scss';
import AccountCard from '../AccountCard';
import { api } from '../../api/api';

const Accounts = (props) => {

    const[accountList, setAccountList] = useState([])
  
    useEffect(() => {
        api.get(`account/getByStatus/${props.status}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`, setAccountList).then((response) => {
            setAccountList(response.data.result);
        })
    }, [props.status]);


    return (
        <div className="accounts">
            <i className="material-icons accounts-icon">{ props.status === "finish" ? "done" : "schedule"}</i>
            {accountList.length > 0 ? accountList.map((account) => {
                return <AccountCard key={account.id} id={account.id} type={account.type} price={account.price} description={account.description} date={`${account.month}/${account.year}`} isDone={account.status === "finish"} />
            }) :  <p className="empty">Nenhuma conta encontrada</p>}
        </div>
    );
}

export default Accounts;