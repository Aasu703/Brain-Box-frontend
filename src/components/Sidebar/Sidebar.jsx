import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const openMeeting = () => {
        window.open("/video-call", "_blank");
    };
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/task-progress">Progress</NavLink>
                <NavLink to="/task-timeline">Timeline</NavLink>
                <NavLink to="/calendar">Calendar</NavLink>
                <NavLink to="/materials">Material</NavLink>
                <button onClick={openMeeting} className="meeting-button">
                    Start Meeting
                </button>
            </nav>
        </div>
    );
};
console.log("Navigating to video call");

export default Sidebar;