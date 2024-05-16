import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainpage/mainpage';
import WritePage from './components/writepage/writepage';
import Login from './components/userpage/login';
import UserPage from  './components/userpage/userpage';
import Loging from './components/userpage/loging'
import SingupPage from './components/userpage/signup';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/user" element={<UserPage />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/loging" element={<Loging />} />
                <Route path="/signup" element={<SingupPage />} />
                {/* 여기에 다른 경로 및 컴포넌트를 위한 Route를 추가할 수 있습니다. */}
            </Routes>
        </Router>

    );
}


export default App;
