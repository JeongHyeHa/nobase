import React, { useState } from 'react';
import './navigation.css';
import { ReactComponent as Home } from '../../assets/image/Home.svg';
import { ReactComponent as Category } from '../../assets/image/Category.svg';
import { ReactComponent as Chat} from '../../assets/image/Chat.svg';
import { ReactComponent as User} from '../../assets/image/User.svg';

const Navigation = ({ categoryStyle, toggleCategory }) => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <div className="icon-container">
                        <a href="/home"><Home/></a>
                    </div>
                </li>
                <li>
                    <button className="icon-button" onClick={toggleCategory}>
                        <div className="icon-container">
                            <Category />
                        </div>
                    </button>
                </li>
                <li>
                    <div className="icon-container">
                        <a href="/message"><Chat /></a>
                    </div>
                </li>
                <li>
                    <div className="icon-container">
                        <a href="/user"><User /></a>
                    </div>
                    <a href="/write" className="write-button">+</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
