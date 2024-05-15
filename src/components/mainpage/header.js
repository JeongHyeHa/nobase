import React from 'react';
import './header.css';


const Header = () => {
    return (
        <header className="main-header">
            <h1>Soon Market</h1>
            <form className="search-form">
                <input type="text" placeholder="검색어 입력" />
            </form>
        </header>
    );
};

export default Header;