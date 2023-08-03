import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
            <header>
                <nav>
                    <li><Link to="/acceuil">Acceuil</Link></li>
                    <li><Link to="/propos">A propos</Link></li>
                </nav>
            </header>

    );
};

export default Header;