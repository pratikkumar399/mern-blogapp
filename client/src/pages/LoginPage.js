import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login(e) {
        e.preventDefault();
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    alert('Login Successful');
                }
                else {
                    alert('Login Failed');
                }
            })
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
