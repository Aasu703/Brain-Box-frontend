import React, { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";
import ChatBot from "./ChatBot";
import "./Chat.css";

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() !== "") {
            console.log("Message sent:", message);
            setMessage("");
        }
    };

    return (
        <div className={`chat-container ${isOpen ? "open" : ""}`}>
            {!isOpen ? (
                <button className="chat-icon" onClick={() => setIsOpen(true)}>
                    <FaComments size={28} />
                </button>
            ) : (
                <div className="chat-box">
                    <div className="chat-header">
                        <span>Chat Assistant</span>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    {/* Chat messages section */}
                    <div className="chat-messages">
                        <ChatBot />
                    </div>

                    {/* Chat input field and send button */}
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className="send-btn" onClick={handleSend}>
                            <FaPaperPlane size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
