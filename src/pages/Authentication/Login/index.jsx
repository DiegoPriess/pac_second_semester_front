import React, { useState } from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';
import CustomAlert from '../../../components/CustomAlert';
import ReactDOM from 'react-dom';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginSenha, setLoginSenha] = useState("");

    let alert;
    
    const onLogin = event => {
        
        event.preventDefault();

        if(loginEmail === "" || loginSenha === "")
        {
            alert = <CustomAlert urlPath="/" labelText="Ops! Todos os campos precisam ser preenchidos." type="negative" />;
            ReactDOM.render(alert, document.getElementById('root'));
        }
        else
        {
            const data = {
                "email": loginEmail,
                "senha": loginSenha
            };

            const pathSuccess = "/menu";
            const pathError   = "/";

            fetch("http://localhost:8080/api/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((data) => {
                if(data.ok){
                    window.location.pathname = pathSuccess;
                }else{
                    alert = <CustomAlert urlPath={pathError} labelText="Email ou senha incorreta." type="negative" />;
                }
            })
            .catch((error) => {
                alert = <CustomAlert urlPath={pathError} labelText={error} type="negative" />;
            }).finally(() => {
                ReactDOM.render(alert, document.getElementById('root'));
            });
        }
    }

    return (
        <form action="">
            <InputGroup icon="account_circle" labelText="Usuário ou E-mail" inputType="text" inputValue={loginEmail} onChangeFunction={event => { setLoginEmail(event.target.value) }}/>
            <InputGroup icon="lock" id="password" labelText="Senha" inputType="password" inputValue={loginSenha} onChangeFunction={event => { setLoginSenha(event.target.value) }}/>
            <div className="actions-container">
                <Link to={"/menu"}><Button onClickFunction={onLogin} textButton="Entrar"/></Link>
                <span className="button-space">Ou</span>
                <Link to={"/register"}><Button customClass="register-button" textButton="Cadastrar-se"/></Link>
            </div>
        </form>    
    );
}

export default Login;