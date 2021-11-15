import React from 'react';
import './style.scss';
import profileImage from '../../assets/imgs/profileExample.jpg';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';
import './style.scss';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <form>
            <div className="profile">
                <label htmlFor="profile-image">
                    <div className="profile-image">
                        <img src={profileImage} alt="" />
                        <span>Clique aqui para alterar sua foto</span>
                    </div>
                    <input id="profile-image" type="file"/>
                </label>

                <div class="profile-data">
                    <InputGroup readonly={true} id="profile-user" icon="account_circle" labelText="Usuário" inputType="text"/>
                    <InputGroup readonly={true} id="profile-email" icon="email" labelText="E-mail" inputType="email"/>
                    <InputGroup readonly={true} id="profile-initial-money" icon="attach_money" labelText="Saldo Inicial" inputType="number"/>
                </div>
            
            </div>
        </form>
    );
}

export default Profile;