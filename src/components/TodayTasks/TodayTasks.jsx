// src/components/TodayTasks.jsx
import React from 'react';
import './TodayTasks.css';

const TodayTasks = () => {
    return (
        <div className="today-tasks">
            <h2>Today's Tasks</h2>
            <ul>
                <li>Delivery App Kit</li>
                <li>Dribbble Shot</li>
                {/* Add more tasks dynamically */}
            </ul>
            <button>View All Tasks</button>
        </div>
    );
};

export default TodayTasks;