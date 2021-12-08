import React, { useState, useEffect } from 'react';
import './style.scss';
import ReactDOM from 'react-dom';
import { api } from '../../api/api';
import CustomAlert from '../CustomAlert';
import InputGroup from '../InputGroup';
import { formateDate } from '../../utils';

const AccountUpdateModal = (props) => {

    const [updateAccountPrice, setUpdateAccountPrice] = useState("");
    const [updateAccountDate, setUpdateAccountDate] = useState("");
    const [updateAccountDescription, setUpdateAccountDescription] = useState("");
    const [updateAccountType, setUpdateAccountType] = useState(false);
    const [updateAccountStatus, setUpdateAccountStatus] = useState("");
    const PATH = window.location.pathname;

    const onUpdateAccount = (event) => {
        
        event.preventDefault();
        
        if(updateAccountPrice === "" || updateAccountDate === "" || updateAccountDescription === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Todos os campos precisam ser preenchidos" type="negative" />, document.getElementById('root'));
        }
        else
        {
            const data = {
                "description": updateAccountDescription,
                "date": updateAccountDate,
                "price": parseInt(updateAccountPrice),
                "type": updateAccountType ? "positive" : "negative",
                "status": updateAccountStatus,
                "id_account": props.id,
                "currentUser": {
                    "email": localStorage.getItem("email"),
                    "password": localStorage.getItem("password") 
                }
            };

            api.post(`account/update`, data).then((response) => {
                if(response.status === 200){
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta criada com sucesso." type="positive" />, document.getElementById('root'));
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Erro ao criar conta." type="negative" /> , document.getElementById('root'));
                }
            })
            .catch((error) => {
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText={error} type="negative" />, document.getElementById('root'));
            });
           
            
        }
    }
  
    useEffect(() => {
        api.get(`account/getById/${props.id}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`).then((response) => {
            if(response.data.result.length > 0){
                setUpdateAccountDescription(response.data.result[0].description);
                setUpdateAccountDate(formateDate("default", response.data.result[0].date));
                setUpdateAccountPrice(response.data.result[0].price);
                setUpdateAccountType(response.data.result[0].type === "positive" ? true : false);
                setUpdateAccountStatus(response.data.result[0].status);
            }
        })
    }, [props.id]);

    return (
        <div className="account-update-modal">
            <div className="account-update-modal-content">
                <div className="account-update-modal-text">                    
                    <form>
                        <div className="data">
                            <InputGroup id="account-description" inputType="text" labelText="Descrição" inputValue={updateAccountDescription} onChangeFunction={event => { setUpdateAccountDescription(event.target.value) }}/>
                            <InputGroup id="account-price" inputType="number" labelText="Preço:" inputValue={updateAccountPrice} onChangeFunction={event => { setUpdateAccountPrice(event.target.value) }}/>
                            <InputGroup id="account-date" inputType="date" labelText="Data:" inputValue={updateAccountDate} onChangeFunction={event => { setUpdateAccountDate(event.target.value) }}/>
                            <div className="account-type-select">
                                <div className="input-container">
                                    <i className="material-icons negative">money_off</i>
                                    <input className="account-type-input" name="account-type" type="radio" value={updateAccountType} onClick={() => { setUpdateAccountType(false) }} 
                                    checked={!updateAccountType}/>
                                </div>
                                
                                <div className="input-container">
                                    <i className="material-icons positive">attach_money</i>
                                    <input className="account-type-input" name="account-type" type="radio" value={updateAccountType} onClick={() => { setUpdateAccountType(true) }} checked={updateAccountType}/>
                                </div>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button onClick={onUpdateAccount}>
                                <i className="material-icons">add</i>
                                <p>Atualizar conta</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AccountUpdateModal;