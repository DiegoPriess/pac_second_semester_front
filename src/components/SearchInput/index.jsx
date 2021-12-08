import React, { useState } from 'react';
import './style.scss';

const SearchInput = () => {

    const [searchContent, setSearchContent] = useState("");

    return (
        <div className="search-input">
            <input type="text" id="search-input" placeholder="Busque pelo nome da conta" value={searchContent} onChange={(event) => setSearchContent(event.target.value)}/>
            <label htmlFor="search-input">
                <i className="material-icons" onClick={() => {window.location.pathname = `/search/${searchContent}`}}>search</i>
            </label>
        </div>
    );
}

export default SearchInput;