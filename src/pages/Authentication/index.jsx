import React from 'react';
import imgSlogan from '../../assets/imgs/loginPage.png';
import logo from '../../assets/imgs/logo-white.png';
import './style.scss';
import Login from './Login';
import Register from './Register';

const Authentication = (props) => {
    return (
        <div className="authentication">
            <img className="logo" src={logo} alt=""/>
            <div className="decorate-container">
                <p>Suas finanças em outro nível</p>
                <img src={imgSlogan} alt=""/>
            </div>
            <div className="authentication-content">
                {props.action === "login" ? <Login /> : <Register />}
            </div>
        </div>
    );
}

export default Authentication;