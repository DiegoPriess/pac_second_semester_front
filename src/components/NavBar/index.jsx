import React from 'react';
import './style.css';
import Item from './Item'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <Item name="Menu Principal"/>
                <Item name="Contas a pagar"/>
                <Item name="Contas pagas"/>
                <Item name="Configuração"/>
            </ul>
        </nav>
    );

}

export default NavBar;