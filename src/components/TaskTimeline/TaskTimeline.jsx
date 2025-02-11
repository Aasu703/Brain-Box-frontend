// src/components/TaskTimeline.jsx
import React from 'react';
import './TaskTimeline.css';

const TaskTimeline = () => {
    return (
        <div className="task-timeline">
            <h2>Task Timeline</h2>
            {/* Implement timeline visualization here */}
            <ul>
                <li>Interview - 10 AM</li>
                <li>Wireframe - 1 PM</li>
                {/* Add more tasks dynamically */}
            </ul>
        </div>
    );
};

export default TaskTimeline;