import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="main-header">
            <Link to="/">
                <span><h1>Soon Market</h1></span>
            </Link>
        </header>
    );
};

export default Header;