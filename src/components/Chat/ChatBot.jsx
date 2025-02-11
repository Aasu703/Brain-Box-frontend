import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatWindowRef = useRef(null);

    const handleSend = () => {
        if (input.trim() === "") return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setInput("");

        setTimeout(() => {
            const botMessage = { text: getBotResponse(input), sender: "bot" };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 1000);
    };

    const getBotResponse = (userInput) => {
        const responses = {
            hello: "Hi there! How can I assist you today? 😊",
            "what up": "Not much, just here to help! 😃",
            goodbye: "Goodbye! Have a great day! 👋",
        };

        return responses[userInput.toLowerCase()] || "I'm not sure how to respond to that. 🤔";
    };

    useEffect(() => {
        chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot">
            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}><FaPaperPlane /></button>
            </div>
        </div>
    );
};

export default ChatBot;
