import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Define the login function
    const login = (userData, token) => {
        setUser({ ...userData, token }); // Store user data in context
        localStorage.setItem('userToken', token); // Optional: Store token if needed
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;