import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/image/profile.jpg';
import './userpage.css';
import Header from '../mainpage/header';
import Navigation from '../mainpage/navigation';

function Userpage() {
    const [userID, setUserID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddr, setUserAddr] = useState('');
    const [userProduct, setUserProduct] = useState('');

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const handleLogout = () => {    //로그아웃 버튼을 클릭했을 때 쿠키가 제거되며 홈 페이지로 리디렉션
        removeCookie('user', { path: '/' });
        navigate('/'); // 홈 페이지로 리디렉션
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/8080');
            const data = await response.json();

            // 상태 업데이트
            setUserID(data.userID);
            setUserEmail(data.userEmail);
            setUserPhone(data.userPhone);
            setUserAddr(data.userAddr);
            setUserProduct(data.userProduct);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="main-container">
            <Header />
            <main>
                <div className="profile-image-container">
                    <img src={profile} alt="프로필 사진" className="profile-image" />
                </div>
                
                <div className="profile-buttons">
                    <button className="edit-profile-button">Edit Profile</button>
                    <button className="logout-button" onClick={handleLogout}>Log Out</button>
                </div>
                
                <div className="user-info-container">
                    <div className="user-info-item">
                        <span className="label">Name</span>
                        <span className="value">{userID}</span>
                    </div>
                    <div className="user-info-item">
                        <span className="label">Email</span>
                        <span className="value">{userEmail}</span>
                    </div>
                    <div className="user-info-item">
                        <span className="label">Phone</span>
                        <span className="value">{userPhone}</span>
                    </div>
                    <div className="user-info-item">
                        <span className="label">Address</span>
                        <span className="value">{userAddr}</span>
                    </div>
                    <div className="user-info-item">
                        <span className="label">Products</span>
                        <span className="value">{userProduct}</span>
                    </div>
                </div>
            </main>
            <Navigation />
        </div>
    );
}

export default Userpage;
