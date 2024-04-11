import React from 'react'; 
import { Link } from 'react-router-dom'; 
import profile from '../../assets/image/profile.jpg'; 
import './userpage.css';

function UserPage () { 
    return (
        <div>
            <header className="main-header">
                <h1>Soon Market</h1>
            </header>
            <main>
                <div className="profile-image-container">
                    <img src={profile} alt="로고" className="profile-image" />
                </div>
                <div className="title">
                    <Link to="/login">Login</Link>
                </div>
                <div className="title">
                    <Link to="/signup">Sign Up</Link>
                </div>
            </main>
        </div>
    );
}

export default UserPage;
