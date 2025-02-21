import axios from "axios";

const API_URL = "http://localhost:5000"; // Make sure this matches your backend

export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, userData);
        return response.data;  // Return success response
    } catch (error) {
        throw error.response?.data || { message: "Signup failed" };
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData);
        return response.data; // Return token and message along with user data
    } catch (error) {
        throw error.response?.data || { message: "Login failed" };
    }
};
