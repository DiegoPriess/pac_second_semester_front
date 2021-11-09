import React from 'react';
import './style.scss';
import profileImage from '../../assets/imgs/profileExample.jpg';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-image">
                <img src={profileImage} alt="" />
                <div className="edit"></div>
            </div>
        </div>
    );
}

export default Profile;