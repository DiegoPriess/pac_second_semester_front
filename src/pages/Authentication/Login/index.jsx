import React from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form action="">
            <InputGroup icon="account_circle" labelText="Usuário ou E-mail" inputType="text"/>
            <InputGroup icon="lock" id="password" labelText="Senha" inputType="password"/>
            <div className="actions-container">
                <Link to={"/menu"}><Button textButton="Entrar"/></Link>
                <span className="button-space">Ou</span>
                <Link to={"/register"}><Button customClass="register-button" textButton="Cadastrar-se"/></Link>
            </div>
        </form>    
    );
}

export default Login;