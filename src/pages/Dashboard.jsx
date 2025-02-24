import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TodayTasks from "../components/TodayTasks/TodayTasks";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import TaskTimeline from "../components/TaskTimeline/TaskTimeline";
import Calendar from "../components/Calendar/Calendar";
import { useAuth } from "../context/AuthContext";
import VideoCallPage from "./VideoCallPage";
import "../css/Dashboard.css";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([
        { id: 1, text: "Sample Task 1", completed: false },
        { id: 2, text: "Sample Task 2", completed: false },
    ]);

    const addTask = (taskText) => {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleLogout = () => {
        logout();
        navigate("/landing");
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <h2>Welcome, {user ? user.name : "Guest"}</h2>
                <div className="dashboard-grid">
                    <div className="tasks-section">
                        <TodayTasks
                            tasks={tasks}
                            addTask={addTask}
                            deleteTask={deleteTask}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />
                        <TaskProgress tasks={tasks} />
                    </div>
                    <div className="calendar-section">
                        <TaskTimeline tasks={tasks} />
                        <Calendar tasks={tasks} />
                    </div>
                </div>
                <div className="video-call-section">
                    <h2>Start a Meeting</h2>
                    <button onClick={() => window.open(VideoCallPage)}>
                        Start Meeting
                    </button>
                </div>
                <div className="logout-section">
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
                <Link to="/landing-page" className="home-button">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;