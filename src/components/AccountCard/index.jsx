import React from 'react';
import CustomAlert from '../CustomAlert';
import './style.scss';
import ReactDOM from 'react-dom';
import { api } from '../../api/api';

const AccountCard = (props) => {

    const PATH = window.location.pathname;

    const changeStatus = (status, id) => {
        const data = {
            "status": status,
            "id_account": id
        }

        api.post(`account/changeStatus`, data).then((response) => {
            if(response.status === 200){
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta finalizada com sucesso." type="positive" />, document.getElementById('root'));
            }else{
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />, document.getElementById('root'));
            }
        })
    }

    const deleteAccount = (id) => {
        api.get(`account/delete/${id}`).then((response) => {
            if(response.status === 200){
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta finalizada com sucesso." type="positive" />, document.getElementById('root'));
            }else{
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />, document.getElementById('root'));
            }
        })
    }

    return (
        <div className="account-card">
            <p className="card-description">{props.description}</p>   
            <i className={`${props.type} material-icons`}>{props.type === "negative" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <p className="date">{props.date}</p>
            <div className="actions">
                {!props.isDone ? <i onClick={() => changeStatus("finish", props.id)} className="material-icons done">done</i> : ""}
                <i onClick={() => deleteAccount(props.id)} className="material-icons close">close</i>
                {/* <i onClick={() => editAccount()} className="material-icons edit">edit</i> */}
            </div>
        </div>
    );
}

export default AccountCard;