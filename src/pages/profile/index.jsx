import React from 'react';
import './style.scss';
import InputGroup from '../../components/InputGroup';
import Button from '../../components/Button';
import ProfileChangePassword from '../../components/ProfileChangePassword';
import ReactDOM from 'react-dom';

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
                    <InputGroup readOnly={true} id="profile-user" icon="account_circle" labelText="Usuário" inputType="text" inputValue={localStorage.getItem("name")}/>
                    <InputGroup readOnly={true} id="profile-email" icon="email" labelText="E-mail" inputType="email" inputValue={localStorage.getItem("email")}/>
                    <Button onClickFunction={() => {ReactDOM.render(<ProfileChangePassword />, document.getElementById('root'));}} customClass="change-password-button" textButton="Alterar senha" />
                </div>
            
            </div>
        </form>
    );
}

export default Profile;