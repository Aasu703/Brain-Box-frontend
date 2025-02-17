import axios from "axios";

const API_BASE_URL = "http://localhost:5000/users"; // Make sure this matches your backend

export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        return response.data;  // Return success response
    } catch (error) {
        throw error.response?.data || { message: "Signup failed" };
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, userData);
        return response.data; // Return token and message
    } catch (error) {
        throw error.response?.data || { message: "Login failed" };
    }
};
