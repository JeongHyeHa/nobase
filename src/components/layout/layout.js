import React from 'react';
import Header from './header';
import Navigation from './navigation';
import './layout.css';


const Layout = ({ children }) => {
    return (
        <div className = "layout">
            <Header />
            <main>
                {children}
            </main>
            <Navigation />
        </div>
    );
};

export default Layout;