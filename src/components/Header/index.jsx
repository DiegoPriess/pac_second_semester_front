import React from 'react';
import logo from '../../assets/imgs/logo.png';
import SearchInput from '../SearchInput';
import './style.scss';
import ProfileThumbnail from '../ProfileThumbnail';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-item logo-item">
                <div className="header-logo">
                    <Link to="/menu"><img src={logo} alt="" /></Link>
                </div>
            </div>
            
            <div className="header-item search-item">
                <SearchInput />
            </div>
            
            <div className="header-item">
                <div className="logout-item">
                    <Link to="/perfil"><ProfileThumbnail /></Link>
                    <Link to="/"><i className="material-icons">logout</i></Link>
                </div>
            </div>
            

        </div>
    );
}

export default Header;