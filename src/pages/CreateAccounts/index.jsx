import React, { useState } from 'react';
import InputGroup from '../../components/InputGroup';
import './style.scss';
import CustomAlert from '../../components/CustomAlert';
import ReactDOM from 'react-dom';
import { api } from '../../api/api';


const CreateAccounts = () => {

    const [createAccountPrice, setCreateAccountPrice] = useState("");
    const [createAccountDate, setCreateAccountDate] = useState("");
    const [createAccountDescription, setCreateAccountDescription] = useState("");
    const [createAccountType, setCreateAccountType] = useState(false);
    const PATH = "/criarcontas";

    const onCreateAccount = (event) => {
        
        event.preventDefault();
        
        if(createAccountPrice === "" || createAccountDate === "" || createAccountDescription === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Todos os campos precisam ser preenchidos" type="negative" />, document.getElementById('root'));
        }
        else
        {
            const data = {
                "description": createAccountDescription,
                "month": parseInt(createAccountDate.split("-")[1]),
                "year": parseInt(createAccountDate.split("-")[0]),
                "price": parseInt(createAccountPrice),
                "type": createAccountType ? "positive" : "negative",
                "status": "pendant",
                "currentUser": {
                    "email": localStorage.getItem("email"),
                    "password": localStorage.getItem("password") 
                }
            };

            api.post(`account/register`, data).then((response) => {
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

    return (
        <div className="create-accounts">
            <i className="material-icons accounts-icon">add</i>
            <form>
                <div className="data">
                    <InputGroup id="account-description" inputType="text" labelText="Descrição" inputValue={createAccountDescription} onChangeFunction={event => { setCreateAccountDescription(event.target.value) }}/>
                    <InputGroup id="account-price" inputType="number" labelText="Preço:" inputValue={createAccountPrice} onChangeFunction={event => { setCreateAccountPrice(event.target.value) }}/>
                    <InputGroup id="account-date" inputType="date" labelText="Data:" inputValue={createAccountDate} onChangeFunction={event => { setCreateAccountDate(event.target.value) }}/>
                    <div className="account-type-select">
                        <div className="input-container">
                            <i className="material-icons negative">money_off</i>
                            <input className="account-type-input" name="account-type" type="radio" value={createAccountType} onClick={() => { setCreateAccountType(false) }} defaultChecked/>
                        </div>

                        <div className="input-container">
                            <i className="material-icons positive">attach_money</i>
                            <input className="account-type-input" name="account-type" type="radio" value={createAccountType} onClick={() => { setCreateAccountType(true) }}/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button onClick={onCreateAccount}>
                        <i className="material-icons">add</i>
                        <p>Enviar conta</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccounts;