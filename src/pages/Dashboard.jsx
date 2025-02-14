import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TodayTasks from "../components/TodayTasks/TodayTasks";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import TaskTimeline from "../components/TaskTimeline/TaskTimeline";
import Calendar from "../components/Calendar/Calendar";
import { useAuth } from '../context/AuthContext';
import "../css/Dashboard.css";

const Dashboard = () => {
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);
    
    // Add a new task
    const addTask = (taskText) => {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString().split("T")[0], // Store as YYYY-MM-DD
            completedAt: null,
        };
        setTasks([...tasks, newTask]);
    };

    // Delete a task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    // Toggle task completion
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString().split("T")[0] : null }
                : task
        ));
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                {/* Welcome Message */}
                <div className="user-info">
                    <h2>
                        Welcome, {user ? `${user.Email} (${user.Role})` : "Guest"} 👋
                    </h2>
                </div>

                {/* Main Dashboard Content */}
                <div className="dashboard-content">
                    {/* Left Panel: Tasks & Progress */}
                    <div className="left-panel">
                        <TodayTasks 
                            tasks={tasks} 
                            addTask={addTask} 
                            deleteTask={deleteTask} 
                            toggleTaskCompletion={toggleTaskCompletion} 
                        />
                        <TaskProgress tasks={tasks} />
                    </div>

                    {/* Right Panel: Timeline & Calendar */}
                    <div className="right-panel">
                        <TaskTimeline tasks={tasks} />
                        <Calendar tasks={tasks} />
                    </div>
                </div>

                {/* Video Call Section */}
                <div className="video-call-section">
                    <h2>Video Call</h2>
                    <button 
                        className="start-meeting-button" 
                        onClick={() => window.open("/video-call", "_blank")}
                    >
                        Start Meeting 🎥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
