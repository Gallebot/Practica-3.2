import React from 'react';

function Task({ task, removeTask }) {
    return (
        <div className="task">
            {task}
            <button onClick={removeTask} className="remove-btn">Remove</button>
        </div>
    );
}

export default Task;
