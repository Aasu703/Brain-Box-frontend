import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatRoom from '../components/Chat';
import VideoCall from '../components/VideoCall';
import FileSharing from '../components/FileSharing';
import '../CSS/pages/Dashboard.css'; // Create a separate CSS for the dashboard

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content-area">
                    <ChatRoom />
                    <VideoCall />
                    <FileSharing />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;