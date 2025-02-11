import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL
const AI_API_URL = 'https://api.openai.com/v1/chat/completions'; // OpenAI API URL
const AI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

// New function to get AI response
export const getAIResponse = async (userInput) => {
    try {
        const response = await axios.post(AI_API_URL, {
            model: 'gpt-3.5-turbo', // Specify the model you want to use
            messages: [{ role: 'user', content: userInput }],
        }, {
            headers: {
                'Authorization': `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        // Return the AI response
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "I'm having trouble connecting to the AI service.";
    }
};