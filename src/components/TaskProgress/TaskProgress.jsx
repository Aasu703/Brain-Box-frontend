import React from "react";

const TaskProgress = () => {
    return (
        <div className="task-progress">
            <h3>Task Progress</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
            </div>
        </div>
    );
};

export default TaskProgress;