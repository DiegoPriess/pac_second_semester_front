import React from 'react';
import './style.scss';
import profileImage from '../../assets/imgs/profileExample.jpg';
import InputGroup from '../../components/InputGroup';
import './style.scss';

const Profile = () => {
    return (
        <form>
            <div className="profile">
                {/* <label htmlFor="profile-image">
                    <div className="profile-image">
                        <img src={profileImage} alt="" />
                        <span>Clique aqui para alterar sua foto</span>
                    </div>
                    <input id="profile-image" type="file"/>
                </label> */}

                <div className="profile-data">
                    <InputGroup readonly={true} id="profile-user" icon="account_circle" labelText="Usuário" inputType="text" inputValue={localStorage.getItem("name")}/>
                    <InputGroup readonly={true} id="profile-email" icon="email" labelText="E-mail" inputType="email" inputValue={localStorage.getItem("email")}/>
                </div>
            
            </div>
        </form>
    );
}

export default Profile;