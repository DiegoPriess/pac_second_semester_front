import React, { useState } from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';
import CustomAlert from '../../../components/CustomAlert';
import ReactDOM from 'react-dom';
import { api } from '../../../api/api';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginSenha, setLoginSenha] = useState("");
    const [loginResponse, setLoginResponse] = useState();
    const PATH_SUCCESS = "/menu";
    const PATH_ERROR   = "/";
    
    const onLogin = event => {
        
        event.preventDefault();

        if(loginEmail === "" || loginSenha === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText="Ops! Todos os campos precisam ser preenchidos." type="negative" />, document.getElementById('root'));
        }
        else
        { 
            api.get(`user/authentication/${loginEmail}/${loginSenha}`).then((response) => {
                if(response.data?.length > 0){
                    localStorage.setItem("name", response.data[0].name);
                    localStorage.setItem("email", response.data[0].email);
                    localStorage.setItem("password", response.data[0].password);
                    window.location.pathname = PATH_SUCCESS;
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH_ERROR} labelText={"Email ou senha incorreta"} type="negative" />, document.getElementById('root'));
                }  
            })

            
        }
    }

    return (
        <form action="">
            <InputGroup icon="account_circle" labelText="E-mail" inputType="text" inputValue={loginEmail} onChangeFunction={event => { setLoginEmail(event.target.value) }}/>
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