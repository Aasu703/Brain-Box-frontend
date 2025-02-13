import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Ensure this matches your backend
const AI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Store API key in environment variables for security
const AI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Ensure you have this set

// Signup API call
export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Signup failed");
    }
};

// Login API call
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

// Function to get AI response
export const getAIResponse = async (userInput) => {
    if (!AI_API_KEY) {
        console.error("Missing OpenAI API key!");
        return "AI service is currently unavailable.";
    }

    try {
        const response = await axios.post(AI_API_URL, {
            model: 'gpt-3.5-turbo', // Change if using a different model
            messages: [{ role: 'user', content: userInput }],
        }, {
            headers: {
                'Authorization': `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching AI response:", error.response?.data || error.message);
        return "I'm having trouble connecting to the AI service.";
    }
};
