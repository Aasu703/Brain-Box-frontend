import axios from "axios";

const API_URL = "http://localhost:5000/api";  // Adjust backend URL

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const fetchMessages = async () => {
  return await axios.get(`${API_URL}/messages`);
};
