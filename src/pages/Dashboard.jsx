// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import TodayTasks from "../components/TodayTasks/TodayTasks";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import TaskTimeline from "../components/TaskTimeline/TaskTimeline";
import Calendar from "../components/Calendar/Calendar";
import Chat from "../components/Chat/Chat";
import VideoCall from "../components/VideoCall/VideoCall";
import { useAuth } from '../context/AuthContext';
import "../css/Dashboard.css";

const Dashboard = () => {
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);
    const { user, logout } = useAuth();

    const toggleVideoCall = () => {
        setIsVideoCallActive(!isVideoCallActive);
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="user-info">
                    {user ? (
                        <h2>Welcome, {user.Email} ({user.Role})</h2>
                    ) : (
                        <h2>Welcome, Guest</h2>
                    )}
                </div>
                <div className="dashboard-content">
                    <div className="left-panel">
                        <TodayTasks />
                        <TaskProgress />
                    </div>
                    <div className="right-panel">
                        <TaskTimeline />
                        <Calendar />
                    </div>
                </div>

                <div className="action-buttons">
                    <button onClick={toggleVideoCall} className={isVideoCallActive ? "stop-meeting-button" : "start-meeting-button"}>
                        {isVideoCallActive ? "Stop Meeting" : "Start Meeting"}
                    </button>
                </div>

                {isVideoCallActive && <VideoCall stopCall={toggleVideoCall} />} 

                <Chat />
            </div>
        </div>
    );
};

export default Dashboard;