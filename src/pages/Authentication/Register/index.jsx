import React, { useState } from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';
import CustomAlert from '../../../components/CustomAlert';
import ReactDOM from 'react-dom';

const Register = () => {

    const [registerUser, setRegisterUser] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const PATH_SUCCESS = "/";
    const PATH_ERROR   = "/register";
    
    const onRegisterUser = event => {
        
        event.preventDefault();

        if(registerUser === "" || registerEmail === "" || registerPassword === "" || registerConfirmPassword === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText="Ops! Todos os campos precisam ser preenchidos." type="negative" />, document.getElementById('root'));
        }
        else if(registerPassword !== registerConfirmPassword)
        {    
            ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText="Ops! Os campos de senha devem ter o mesmo valor." type="negative" />, document.getElementById('root'));
        }
        else
        {
            const data = {
                "email": registerEmail,
                "nome": registerUser,
                "senha": registerPassword
            };

            fetch("http://localhost:8080/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((data) => {
                if(data.ok){
                    ReactDOM.render(<CustomAlert urlPath={PATH_SUCCESS} labelText="Usuário cadastrado com sucesso." type="positive" />, document.getElementById('root'));
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText="Erro ao cadastrar usuário." type="negative" />, document.getElementById('root'));
                }
            })
            .catch((error) => {
                ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText={error} type="negative" />, document.getElementById('root'));
            });
        }
    }

    return (
        <form className="authentication-register">
            <InputGroup icon="account_circle" id="register-name" labelText="Usuário" inputType="text"
                inputValue={registerUser} onChangeFunction={event => { setRegisterUser(event.target.value) }} />

            <InputGroup icon="email" id="register-email" labelText="E-mail" inputType="email"
                inputValue={registerEmail} onChangeFunction={event => { setRegisterEmail(event.target.value) }} />

            <InputGroup icon="lock" id="register-password" labelText="Senha" inputType="password"
                inputValue={registerPassword} onChangeFunction={event => { setRegisterPassword(event.target.value) }} />

            <InputGroup icon="lock" id="register-confirm-password" labelText="Confirmar Senha" inputType="password"
                inputValue={registerConfirmPassword} onChangeFunction={event => { setRegisterConfirmPassword(event.target.value) }} />

            <div className="actions-container">
                <Button onClickFunction={onRegisterUser} textButton="Cadastrar-se"/>
                <span className="button-space">Ou</span>
                <Link to={"/"}><Button customClass="register-button" textButton="Voltar para tela de login"/></Link>
            </div>
        </form>    
    );
}

export default Register;