import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom'
import { api } from '../../api/api';
import AccountCard from '../../components/AccountCard';
import { formateDate } from '../../utils';
import './style.scss';


const Search = () => {

    const [accountList, setAccountList] = useState([]);
    const { searchText } = useParams();
  
    useEffect(() => {
        api.get(`account/search/${searchText}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`, setAccountList).then((response) => {
            setAccountList(response.data.result);
        })
    }, [searchText]);

    return (
        <div className="accounts-search">
            {accountList.length > 0 ? accountList.map((account) => {  
                return <AccountCard key={account.id} id={account.id} type={account.type} price={account.price} description={account.description} date={`${formateDate("pt", account.date)}`} isDone={account.status === "finish"} />
            }) :  <p className="empty">Nenhuma conta encontrada</p>}
        </div>
    );
}

export default Search;