import React, { useState } from 'react';

function TaskButtons({ onAdd, onRemove }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        onAdd(input);
        setInput('');
    };

    return (
        <div className="task-buttons">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAdd}>Add Task</button>
            <button onClick={onRemove}>Remove Last Task</button>
        </div>
    );
}


export default TaskButtons;
