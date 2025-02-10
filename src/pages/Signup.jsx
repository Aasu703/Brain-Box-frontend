// src/pages/Signup.jsx
import React, { useState } from 'react';
import './Auth.css'; // Importing styles

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signing up with:', { name, email, password });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
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
                    <button type="submit">Sign Up</button>
                </form>
                <div className="social-login">
                    <button className="google">Sign Up with Google</button>
                    <button className="apple">Sign Up with Apple</button>
                </div>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;