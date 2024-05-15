import React, { useState } from 'react';
import './login.css';
import LoginPage from './googleloginbutton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/mainpage/header';
import Navigation from '../../components/mainpage/navigation';


const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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
    
        /*try {
            // 서버로 전송할 데이터 객체 생성
            const userData = {
                userId: userId,
                password: password
            };
    
            // Axios를 사용하여 POST 요청을 보냅니다.
            const response = await axios.post('/api/login', userData);
    
            // 요청에 대한 응답 처리
            console.log(response.data); // 서버로부터 받은 응답 데이터를 출력합니다.
    
            // 로그인 성공 후 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    */
            // 로그인 성공 후 입력 칸 비우기
            setUserId('');
            setPassword('');
            setErrorMessage(''); // 에러 메시지 초기화
            navigate('/loging');
        /*} catch (error) {
            console.error('로그인 요청 실패:', error);
            // 에러 처리 로직을 추가할 수 있습니다.
        }*/
    };
    

    return (
        <div className="main-container">
            <Header />
            <main>
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
                    <div className="login-container">
                        <div className="line"></div>
                        <div className="title">
                            <Link to="/signup">Sign Up</Link>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className='google_btn'>
                        <LoginPage className='google_img'/>
                    </div>
                    {/*<div className="terms">
                    <p>
                        By clicking continue, you agree to our 
                        <span id="TermsOfService"> <a href='#'>Terms of Service</a></span>
                        , and 
                        <span id="PrivacyPolicy"> <a href = '#'>Privacy Policy</a></span>
                    </p>
                    </div>*/}
                </div>
            </main>
        </div>
    );
};

export default Login;