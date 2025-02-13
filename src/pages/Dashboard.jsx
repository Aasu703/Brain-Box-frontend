import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TodayTasks from "../components/TodayTasks/TodayTasks";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import TaskTimeline from "../components/TaskTimeline/TaskTimeline";
import Calendar from "../components/Calendar/Calendar";
import { useAuth } from '../context/AuthContext';
import "../css/Dashboard.css";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
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
                
                <div className="video-call-section">
                    <h2>Video Call</h2>
                    <button className="start-meeting-button" onClick={() => window.open("/video-call", "_blank")}>
                        Start Meeting
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;