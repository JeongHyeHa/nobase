import React, { useState } from 'react';
import axios from 'axios'; // Axios를 사용하여 HTTP 요청을 보낼 수 있습니다.
import './login.css';
import { Link } from 'react-router-dom'; // Link를 임포트


const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage('아이디를 입력해주세요.');
            return;
        }
    
        if (!password) {
            setErrorMessage('비밀번호를 입력해주세요.');
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
        /*} catch (error) {
            console.error('로그인 요청 실패:', error);
            // 에러 처리 로직을 추가할 수 있습니다.
        }*/
    };
    

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>Soon Market</h1>
            </header>
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
                    <div className="container">
                        <div className="line"></div>
                        <div className="title">
                            {/*<Link to="/signup">Sign Up</Link>*/}
                            Sign Up
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
