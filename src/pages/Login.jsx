import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../css/Auth.css';
import { jwtDecode } from 'jwt-decode'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = { Email: email, Password: password };
            const response = await login(userData);

            // Save token & decode user info
            localStorage.setItem('token', response.token);
            const decodedUser = jwtDecode(response.token);
            localStorage.setItem('user', JSON.stringify(decodedUser));

            setMessage('Login successful!');
            navigate('/dashboard'); // Redirect to Dashboard
        } catch (error) {
            setMessage(error.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Login</h1>
                <form onSubmit={handleLogin} className="auth-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <button type="submit" className="auth-button">Login</button>
                </form>
                {message && <p className="auth-message">{message}</p>}
            </div>
        </div>
    );
};

export default Login;
