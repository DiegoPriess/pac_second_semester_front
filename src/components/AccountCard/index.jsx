import React, { useState } from 'react';
import CustomAlert from '../CustomAlert';
import './style.scss';
import ReactDOM from 'react-dom';
import { get } from '../../api/api';

const AccountCard = (props) => {

    const PATH = window.location.pathname;
    const [requestOk, setRequestOk] = useState([]);

    const changeStatus = (status, id) => {

        get(`/api/lancamentos/atualiza-status/${id}/${status}`, setRequestOk);

        if(requestOk){
            console.log(requestOk);
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta finalizada com sucesso." type="positive" />, document.getElementById('root'));
        }else{
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />, document.getElementById('root'));
        }
    }

    const editAccount = () => {
        
    }

    return (
        <div className="account-card">
            <p className="card-description">{props.description}</p>   
            <i className={`${props.type === "DESPESA" ? "negative" : "positive"} material-icons`}>{props.type === "DESPESA" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <p className="date">{props.date}</p>
            <div className="actions">
                {!props.isDone ? <i onClick={() => changeStatus("EFETIVADO", props.id)} className="material-icons done">done</i> : ""}
                <i onClick={() => changeStatus("CANCELADO", props.id)} className="material-icons close">close</i>
                <i onClick={() => editAccount()} className="material-icons edit">edit</i>
            </div>
        </div>
    );
}

export default AccountCard;