import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Chat.css"; // Ensure your CSS file is imported
import { getAIResponse } from '../../services/api'; // Adjusted path

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatWindowRef = useRef(null);

    const handleSend = async () => {
        if (input.trim() === "") return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput(""); // Clear input field

        // Get AI response
        const botMessage = { text: await getAIResponse(input), sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    };

    useEffect(() => {
        chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot">
            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        <span>{msg.sender === "user" ? "You: " : "Bot: "}{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyPress={(e) => e.key === "Enter" && handleSend()} // Send on Enter key
                />
                <button onClick={handleSend}><FaPaperPlane /></button>
            </div>
        </div>
    );
};

export default ChatBot;