import React from 'react'
import { useState } from 'react'
const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        const response = await fetch('https://mernapp-4kgs.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.status === 200) {
            alert('Registered Successfully');
        }
        else {
            alert('Registration Failed');
        }
    }
    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage
