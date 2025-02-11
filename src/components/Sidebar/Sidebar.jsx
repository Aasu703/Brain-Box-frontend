// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import Sidebar styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <Link to="/messages">Messages</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/settings">Settings</Link>
                {/* Add more links as needed */}
            </nav>
        </div>
    );
};

export default Sidebar;