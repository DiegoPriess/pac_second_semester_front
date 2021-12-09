import React from 'react';
import CustomAlert from '../CustomAlert';
import './style.scss';
import ReactDOM from 'react-dom';
import { api } from '../../api/api';
import AccountUpdateModal from '../AccountUpdateModal';

const AccountCard = (props) => {

    const PATH = window.location.pathname;

    const changeStatus = (status) => {
        const data = {
            "status": status,
            "id_account": props.id
        }

        api.post(`account/changeStatus`, data).then((response) => {
            if(response.status === 200){
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta finalizada com sucesso." type="positive" />, document.getElementById('root'));
            }else{
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />, document.getElementById('root'));
            }
        })
    }

    const deleteAccount = () => {
        api.get(`account/delete/${props.id}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`).then((response) => {
            if(response.status === 200){
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta excluída com sucesso." type="positive" />, document.getElementById('root'));
            }else{
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />, document.getElementById('root'));
            }
        })
    }

    const editAccount = () => {
        ReactDOM.render(<AccountUpdateModal id={props.id} />, document.getElementById('root'));
    }

    return (
        <div className="account-card">
            <p className="card-description">{props.description}</p>   
            <i className={`${props.type} material-icons`}>{props.type === "negative" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <p className="date">{props.date}</p>
            <div className="actions">
                {!props.isDone ? <i onClick={() => changeStatus("finish")} className="material-icons done">done</i> : ""}
                <i onClick={() => deleteAccount()} className="material-icons close">close</i>
                <i onClick={() => editAccount()} className="material-icons edit">edit</i>
            </div>
        </div>
    );
}

export default AccountCard;