import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const openMeeting = () => {
        window.open("/video-call", "_blank"); // Open video call in a new window
    };

    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/progress">Progress</NavLink>
                <NavLink to="/timeline">Timeline</NavLink>
                <NavLink to="/calendar">Calendar</NavLink>
                <button onClick={openMeeting} className="meeting-button">
                    Start Meeting
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;