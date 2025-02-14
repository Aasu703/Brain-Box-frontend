import React from "react";
import "./TaskProgress.css";

const TaskProgress = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="progress-container">
            <h3 className="progress-header">Task Progress</h3>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}>
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
};

export default TaskProgress;
