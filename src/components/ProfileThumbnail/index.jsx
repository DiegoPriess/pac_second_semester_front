import React from 'react';
import './style.scss';

const ProfileThumbnail = () => {
    return (
        <div className="profile-thumbnail">
            {/* <div className="profile-image">
                <img src={ProfileImage} alt="" />
            </div> */}
            <div className="item-content">
                {localStorage.getItem("name")}
            </div>
        </div>
    );
}

export default ProfileThumbnail;