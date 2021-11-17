import React from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';
import CustomAlert from '../../../components/CustomAlert';
import ReactDOM from 'react-dom';

const Register = () => {


    const registerUser = event => {
        event.preventDefault();
        if(document.getElementById("register-password").value !== document.getElementById("register-confirm-password").value){
            alert("Ops! Os campos de senhas devem estar iguais");
        
        }else{
            const data = {
                "email": document.getElementById("register-email").value,
                "nome": document.getElementById("register-name").value,
                "senha": document.getElementById("register-password").value
            };
    
            fetch("http://localhost:8080/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((data) => {
                return <CustomAlert type="positive" />;
            })
            .catch((error) => {
                return <CustomAlert type="negative" />;
            });
        }
    }
    

    return (
        <form className="authentication-register">
            <InputGroup icon="account_circle" id="register-name" labelText="Usuário" inputType="text"/>
            <InputGroup icon="email" id="register-email" labelText="E-mail" inputType="email"/>
            <InputGroup icon="lock" id="register-password" labelText="Senha" inputType="password"/>
            <InputGroup icon="lock" id="register-confirm-password" labelText="Confirmar Senha" inputType="password"/>
            <div className="actions-container">
                <Button onClickFunction={registerUser} textButton="Cadastrar-se"/>
                <span className="button-space">Ou</span>
                <Link to={"/"}><Button customClass="register-button" textButton="Voltar para tela de login"/></Link>
            </div>
        </form>    
    );
}

export default Register;