import React from 'react';
import CustomAlert from '../CustomAlert';
import './style.scss';
import ReactDOM from 'react-dom';

const AccountCard = (props) => {

    const PATH = window.location.pathname;
    let alert

    const changeStatus = (status, event) => {
        const data = {
            "id": props.key,
            "status": status
        }

        event.preventDefault();

        fetch("http://localhost:8080/api/lancamentos/atualizarStatus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((data) => {
            if(data.ok){
                alert = <CustomAlert urlPath={PATH} labelText="Conta finalizada com sucesso." type="positive" />;
            }else{
                alert = <CustomAlert urlPath={PATH} labelText="Ops! Houve algum erro ao tentar finalizar a conta." type="negative" />;
            }
        })
        .catch((error) => {
            alert = <CustomAlert urlPath={PATH} labelText={error} type="negative" />;
        });

        if(alert){
            ReactDOM.render(alert, document.getElementById('root'));
        }
    }

    const editAccount = () => {
        
    }

    return (
        <div className="account-card">
            <p className="card-description">{props.description}</p>   
            <i className={`${props.type} material-icons`}>{props.type === "negative" ? "money_off" : "attach_money "}</i>
            <p className="price">{`R$${props.price}`}</p>
            <p className="date">{props.date}</p>
            <div className="actions">
                {!props.isDone ? <i onClick={() => changeStatus("EFETIVADO")} className="material-icons done">done</i> : ""}
                <i onClick={() => changeStatus("CANCELADO")} className="material-icons close">close</i>
                <i onClick={() => editAccount()} className="material-icons edit">edit</i>
            </div>
        </div>
    );
}

export default AccountCard;