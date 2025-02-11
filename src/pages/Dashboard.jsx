// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import TodayTasks from '../components/TodayTasks/TodayTasks';
import TaskProgress from '../components/TaskProgress/TaskProgress';
import TaskTimeline from '../components/TaskTimeline/TaskTimeline';
import Calendar from '../components/Calendar/Calendar';
import Chat from '../components/Chat/Chat'; // Import Chat component
import VideoCall from '../components/VideoCall/VideoCall'; // Import VideoCall component
import '../css/Dashboard.css'; // Import Dashboard specific styles

const Dashboard = () => {
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);

    const startVideoCall = () => {
        setIsVideoCallActive(true);
    };

    const stopVideoCall = () => {
        setIsVideoCallActive(false);
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="dashboard-content">
                    <TodayTasks />
                    <TaskProgress />
                    <TaskTimeline />
                    <Calendar />

                    {!isVideoCallActive ? (
                        <button onClick={startVideoCall} className="start-meeting-button">
                            Start Meeting
                        </button>
                    ) : (
                        <button onClick={stopVideoCall} className="stop-meeting-button">
                            Stop Meeting
                        </button>
                    )}

                    {isVideoCallActive && <VideoCall stopCall={stopVideoCall} />} {/* Pass stop function */}

                    <Chat /> {/* Add Chat component */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;