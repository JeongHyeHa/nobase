import React from 'react'; // React만 import하여 사용합니다
import { Link } from 'react-router-dom'; // Link를 임포트

function UserPage() { // 함수명을 대문자로 시작하도록 변경합니다
    return (
        <div className="title">
            <Link to="/login">Login</Link>
        </div>
    );
}

export default UserPage; // export 구문 수정
