import React, { useState } from 'react';
import './style.scss';
import ReactDOM from 'react-dom';
import { api } from '../../api/api';
import CustomAlert from '../CustomAlert';
import InputGroup from '../InputGroup';

const ProfileChangePassword = (props) => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const PATH = window.location.pathname;

    const onUpdateAccount = (event) => {
        
        event.preventDefault();
        
        if(newPassword === "" || confirmNewPassword === "" || currentPassword === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Todos os campos precisam ser preenchidos" type="negative" />, document.getElementById('root'));
        }
        else if(newPassword !== confirmNewPassword)
        {    
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Os campos de senha devem ter o mesmo valor." type="negative" />, document.getElementById('root'));
        }
        else
        {

            const data = {
                "email": localStorage.getItem("email"),
                "currentPassword": currentPassword,
                "newPassword": newPassword
            }
       
            api.post(`user/changePassword`, data).then((response) => {
                if(response.data.result.affectedRows > 0){
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Senha alterada com sucesso." type="positive" />, document.getElementById('root'));
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Erro ao alterar senha." type="negative" /> , document.getElementById('root'));
                }
            })
            .catch((error) => {
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText={error} type="negative" />, document.getElementById('root'));
            });
           
            
        }
    }

    return (
        <div className="account-update-modal">
            <div className="account-update-modal-content">         
                <form>
                    <div className="data">
                        <InputGroup id="current-password" inputType="password" labelText="Senha Atual:" inputValue={currentPassword} onChangeFunction={event => { setCurrentPassword(event.target.value) }}/>
                        <InputGroup id="new-password" inputType="password" labelText="Nova senha:" inputValue={newPassword} onChangeFunction={event => { setNewPassword(event.target.value) }}/>
                        <InputGroup id="confirm-new-password" inputType="password" labelText="Confirmar nova senha:" inputValue={confirmNewPassword} onChangeFunction={event => { setConfirmNewPassword(event.target.value) }}/>
                    </div>
                    <div className="submit-container">
                        <button onClick={onUpdateAccount}>
                            <i className="material-icons">add</i>
                            <p>Atualizar senha</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileChangePassword;