// src/components/TaskProgress.jsx
import React from 'react';
import './TaskProgress.css';

const TaskProgress = () => {
    return (
        <div className="task-progress">
            <h2>Task Progress</h2>
            {/* Use a progress bar or charting library for visualization */}
            <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
            </div>
            <p>60% of tasks completed!</p>
        </div>
    );
};

export default TaskProgress;