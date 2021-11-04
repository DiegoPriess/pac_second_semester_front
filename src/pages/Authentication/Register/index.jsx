import React from 'react';
import Button from '../../../components/Button';
import InputGroup from '../../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form action="">
            <InputGroup icon="account_circle" labelText="Usuário" inputType="text"/>
            <InputGroup icon="email" labelText="E-mail" inputType="email"/>
            <InputGroup icon="lock" id="password" labelText="Senha" inputType="password"/>
            <InputGroup icon="lock" id="confirm-password" labelText="Confirmar Senha" inputType="password"/>
            <InputGroup icon="attach_money" labelText="Saldo Inicial" inputType="number"/>
            <Button textButton="Cadastrar-se"/>
            <span className="button-space">Ou</span>
            <Link to={"/"}><Button customClass="register-button" textButton="Voltar para tela de login"/></Link>
        </form>    
    );
}

export default Register;