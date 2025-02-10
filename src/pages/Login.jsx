// src/pages/Login.jsx
import React, { useState } from 'react';
import './Auth.css'; // Importing styles

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <div className="terms">
                        <input type="checkbox" required />
                        <label> I agree to the Terms & Conditions</label>
                    </div>
                    <button type="submit">Create account</button>
                </form>
                <div className="social-login">
                    <button className="google">Sign in with Google</button>
                    <button className="apple">Sign in with Apple</button>
                </div>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Login;