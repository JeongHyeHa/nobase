import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './userpage.css';
import profile from '../../assets/image/profile.jpg';
import { ReactComponent as Right} from '../../assets/icon/right.svg';
import Layout from '../layout/layout';
import Withdraw from './withdraw';


function Userpage() {
    const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);    /*계정 삭제*/

    const [cookies, setCookie, removeCookie] = useCookies(['user', 'name', 'email', 'phone', 'address']);
    const name = cookies.name || 'Helena Hills';
    const email = cookies.email || 'name@domain.com';
    const phone = cookies.phone || '010-0000-0000';
    const address = cookies.address || '주소를 입력해주세요';

    const navigate = useNavigate();

    const handleLogout = () => {    /*로그아웃*/
        removeCookie('user', { path: '/' });
        navigate('/'); 
    };

    const handleOpenWithdraw = () => {  /*계정삭제*/
        setIsWithdrawOpen(true);
      };
    
      const handleCloseWithdraw = () => {
        setIsWithdrawOpen(false);
      };

    useEffect(() => {
        setCookie('name', 'Helena Hills', { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        setCookie('email', 'name@domain.com', { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        setCookie('phone', '010-0000-0000', { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
    }, [setCookie]);

    return (
        <Layout>
            <div className="userpage-container">
                <div className="profile">
                    <img src={profile} alt="프로필 사진" className="profile-image" />
                </div>
                
                <div className="edit-logout">
                    <button className="edit">Edit Profile</button>
                    <button className="logout" onClick={handleLogout}>Log Out</button>
                </div>
                
                <div className="info">
                    <div className="info-item">
                        <p className="label"><strong>Name:</strong></p>
                        <p className="value">{name}</p>
                    </div>
                    <div className="info-item">
                        <p className="label"><strong>Email:</strong></p>
                        <p className="value">{email}</p>
                    </div>
                    <div className="info-item">
                        <p className="label"><strong>Phone:</strong></p>
                        <p className="value">{phone}</p>
                    </div>
                    <div className="info-item">
                        <p className="label"><strong>Address:</strong></p>
                        <p className="value">{address}</p>
                    </div>
                    <div className="info-item last">
                        <p className="label"><strong>Products:</strong></p>
                        <p className="value">
                            <a href="/products" ><Right className='svgIcon'/></a>
                        </p>
                    </div>
                </div>
                <div className="delete">
                    <button className="delete-button" onClick={handleOpenWithdraw}>계정 삭제</button>
                    {isWithdrawOpen && <Withdraw onClose={handleCloseWithdraw} />}
                </div>
            </div>
        </Layout>
    );
}

export default Userpage;
