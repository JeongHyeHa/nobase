import React, { useState } from 'react';
import './navigation.css';
import { ReactComponent as Home } from '../../assets/icon/Home.svg';
import { ReactComponent as Category } from '../../assets/icon/Category.svg';
import { ReactComponent as Chat} from '../../assets/icon/Chat.svg';
import { ReactComponent as User} from '../../assets/icon/User.svg';
import { ReactComponent as WritePage} from '../../assets/icon/write.svg';

const Navigation = ({toggleCategory }) => {

    const navigateToHome = () => {
        window.location='/home';
    };
    const navigateToUser = () => {
        window.location='/User';
    };
    const navigateTowrite =() =>{
        window.location='/write'
    };

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <button className="icon-button" onClick={navigateToHome}>
                        <div className="icon-container">
                            <a href="/home"><Home/></a>
                        </div>
                    </button>
                </li>
                <li>
                    <button className="icon-button" onClick={toggleCategory}> 
                        <div className="icon-container">
                            <Category />
                        </div>
                    </button>
                </li>
                <li>
                    <button className="icon-button"  onClick={navigateTowrite}>
                        <div className="icon-container">
                            <a href="/write"><WritePage /></a>
                        </div>
                    </button>
                </li>
                <li>
                    <button className="icon-button" >
                        <div className="icon-container">
                            <a href="/message"><Chat /></a>
                        </div>
                    </button>
                </li>
                <li>
                    <button className="icon-button" onClick={navigateToUser}>
                        <div className="icon-container">
                            <a href="/user"><User /></a>
                        </div>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
