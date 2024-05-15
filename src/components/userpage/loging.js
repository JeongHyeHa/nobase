import React, { useState, useEffect } from 'react';
import profile from '../../assets/image/profile.jpg';
import './loging.css';
import Header from '../../components/mainpage/header';


function Loging() {
    const [userID, setUserID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddr, setUserAddr] = useState('');
    const [userProduct, setuserProduct] = useState('');

    const fetchUserData = async () => {
        try {
            // API 경로에 따라 fetch를 조정하세요. 예를 들어 '/api/user'를 실제 API 경로로 변경하세요.
            const response = await fetch('/api/8080');
            const data = await response.json();

            // 상태 업데이트
            setUserID(data.userID);
            setUserEmail(data.userEmail);
            setUserPhone(data.userPhone);
            setUserAddr(data.userAddr);
            setuserProduct(data.userProduct);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // 컴포넌트 마운트 시 데이터 가져오기
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
                    <button className="logout-button">Log Out</button>
                </div>
                
                <div className="user-info-container">
                    <div class="user-info-item">
                        <span class="label">Name</span>
                        <span class="value">{userID}</span>
                    </div>
                    <div class="user-info-item">
                        <span class="label">Email</span>
                        <span class="value">{userEmail}</span>
                    </div>
                    <div class="user-info-item">
                        <span class="label">Phone</span>
                        <span class="value">{userPhone}</span>
                    </div>
                    <div class="user-info-item">
                        <span class="label">Address</span>
                        <span class="value">{userAddr}</span>
                    </div>
                    <div class="user-info-item">
                        <span class="label">Products</span>
                        <span class="value">{userProduct}</span>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Loging;
