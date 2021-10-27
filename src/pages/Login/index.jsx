import React from 'react';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';
import imgSlogan from '../../assets/imgs/loginPage.png';
import logo from '../../assets/imgs/logo-white.png';
import './style.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <img className="logo" src={logo} alt=""/>
            <div className="decorate-container">
                <p>Suas finanças em outro nível</p>
                <img src={imgSlogan} alt=""/>
            </div>
            <div className="login-content">
                <form action="">
                    <InputGroup icon="account_circle" labelText="Usuário ou E-mail" inputType="text"/>
                    <InputGroup icon="lock" labelText="Senha" inputType="password"/>
                    <Link to={"/menu"}><Button textButton="Entrar"/></Link>
                    <span className="button-space">Ou</span>
                    <Button customClass="register-button" textButton="Cadastrar-se"/>
                </form>
            </div>
        </div>
    );
}

export default Login;