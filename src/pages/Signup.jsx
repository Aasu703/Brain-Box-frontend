// src/pages/Signup.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import '../css/Auth.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const { login: authLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userData = { Email: email, Password: password, Role: role };
            const response = await signup(userData);
            authLogin(response.token);
            setMessage(response.message);
            navigate('/dashboard');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Signup</h1>
                <form onSubmit={handleSignup} className="auth-form">
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
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="auth-input"
                    >
                        <option value="">Select Role</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                    <button type="submit" className="auth-button">Signup</button>
                </form>
                {message && <p className="auth-message">{message}</p>}
            </div>
        </div>
    );
};

export default Signup;