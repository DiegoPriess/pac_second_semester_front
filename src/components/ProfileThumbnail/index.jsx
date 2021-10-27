import React from 'react';
import './style.scss';
import ProfileImage from '../../assets/imgs/profileExample.jpg'

const ProfileThumbnail = () => {
    return (
        <div className="profile-thumbnail">
            <div className="profile-image">
                <img src={ProfileImage} alt="" />
            </div>
            <div className="item-content">
                Diego Priess
            </div>
        </div>
    );
}

export default ProfileThumbnail;