import React from 'react';
import './style.css'

const Item = (props) => {
    return (
        <li>
            <a>{ props.name }</a>
        </li>
    )
}

export default Item;