import React from 'react';
import google from '../../assets/image/google.png';
import Cookies from "js-cookie";
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from "@react-oauth/google";


const GoogleLoginButton = () => {
  const signIn = useGoogleLogin({
      onSuccess: (res) => { 
            axios.post('http://localhost:8080/auth/login', {
              access_token: res.access_token,
          })
          .then(response => {
            Cookies.set('accessToken', response.data.token);
              console.log(response);
          })
          .catch(error => {
              console.log(error);
          });
      },
      onError: (error) =>{ console.log(error);}
  });

  return (
      <div onClick={() => signIn()}>
          <img src={google} alt="Login with Google" style={{ cursor: 'pointer' }} />
      </div>
  );
};

const LoginPage = () => {
  const clientId = '796964459405-6hb836l3cc18hfuo1qigj6jl8etnar4n.apps.googleusercontent.com';

  return (
      <GoogleOAuthProvider clientId={clientId}>
          <GoogleLoginButton />
      </GoogleOAuthProvider>
  );
};


export default LoginPage
