// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import TodayTasks from '../components/TodayTasks/TodayTasks';
import TaskProgress from '../components/TaskProgress/TaskProgress';
import TaskTimeline from '../components/TaskTimeline/TaskTimeline';
import Calendar from '../components/Calendar/Calendar';
import '../css/Dashboard.css'; // Import Dashboard specific styles

const Dashboard = () => {
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;