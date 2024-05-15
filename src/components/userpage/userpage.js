import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/image/profile.jpg';
import './userpage.css';
import Header from '../../components/mainpage/header';

function UserPage() {
    return (
        <div>
            <Header />
            <main>
                <div className="profile-image-container">
                    <img src={profile} alt="로고" className="profile-image" />
                </div>
                
                <div className="title-container">
                    <div className="title top">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="title bottom">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UserPage;
