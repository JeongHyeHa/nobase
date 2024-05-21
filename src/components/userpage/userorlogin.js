import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../userpage/login';
import UserPage from '../userpage/userpage';

const UserOrLogin = () => {
    const [cookies] = useCookies(['user']);

    if (cookies.user) {
        return <UserPage />;
    } else {
        return <Login />;
    }
};

export default UserOrLogin;
