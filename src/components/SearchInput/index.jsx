import React from 'react';
import './style.scss';

const SearchInput = () => {

    return (
        <div className="search-input">
            <input type="text" id="search-input" placeholder="Busque pelo nome da conta"/>
            <label htmlFor="search-input">
                <i className="material-icons">search</i>
            </label>
        </div>
    );
}

export default SearchInput;