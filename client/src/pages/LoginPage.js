import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(e) {
        e.preventDefault();
        const response = await fetch('https://mernapp-4kgs.onrender.com/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        }
        else {
            alert('Login Failed');
        }
    }

    if (redirect) {
        return <Navigate to='/' />
    }

    return (
        <form className='login' onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    )
}

export default LoginPage;
