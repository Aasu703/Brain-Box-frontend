import { useState } from "react";
import { signupUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css"; // Assuming you have a common CSS file for auth

const Signup = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", userType: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const res = await signupUser(userData);
            alert("Signup Successful!");
            navigate("/login"); // Redirect to login page
        } catch (err) {
            setError(err.message || "Signup failed. Try again.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Signup</h2>
                {error && <p className="auth-message">{error}</p>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        className="auth-input" 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="auth-input" 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="auth-input" 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <div className="user-type-selection">
                        <label>
                            <input 
                                type="radio" 
                                name="userType" 
                                value="student" 
                                checked={userData.userType === "student"} 
                                onChange={handleChange} 
                            />
                            Student
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="userType" 
                                value="teacher" 
                                checked={userData.userType === "teacher"} 
                                onChange={handleChange} 
                            />
                            Teacher
                        </label>
                    </div>

                    <button type="submit" className="auth-button">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;