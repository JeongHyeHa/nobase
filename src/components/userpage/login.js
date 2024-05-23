import React, { useState } from 'react';
import './login.css';
import LoginPage from './googleloginbutton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Layout from '../layout/layout';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // 아이디와 비밀번호 입력 여부 확인
        if (!userId) {
            alert('아이디를 입력해주세요.'); // 경고창으로 메시지 출력
            return;
        }
    
        if (!password) {
            alert('비밀번호를 입력해주세요.'); // 경고창으로 메시지 출력
            return;
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, password })
        });

        if (response.ok) {
            const data = await response.json();
            setCookie('user', data.token, { path: '/' });
            // 로그인 성공 후 입력 칸 비우기
            setUserId('');
            setPassword('');
            setErrorMessage(''); 
            navigate('/loging');
        } else {
            alert('로그인을 실패하였습니다. 다시 시도해주세요.');
            console.error('Login failed');
        }
    };

    return (
        <Layout>
            <div className="login-container">
                <div className='login'>
                    <div className='login_md_id'>
                        <input
                            type="text"
                            placeholder="ID"
                            id="userId"
                            name="userId"
                            value={userId}
                            onChange={handleUserIdChange} // 아이디 입력값이 변경될 때마다 상태를 업데이트
                        />
                    </div>
                    <div className='login_md_passwd'>
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange} // 비밀번호 입력값이 변경될 때마다 상태를 업데이트
                        />
                    </div>
                    <button type="submit" className="btn btn-login" onClick={handleLogin}>
                        Login
                    </button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="center-container">
                        <div className="line"></div>
                        <div className="title">
                            <Link to="/signup" className='_title'>Sign Up</Link>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className='google_btn'>
                        <LoginPage className='google_img'/>
                    </div>
                </div>
            </div>    
        </Layout>
    );
};

export default Login;
