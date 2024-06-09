import React, { useState } from 'react';

function TaskCreation({ addTask }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    return (
        <div className="task-creation">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe aqui tu tarea..."
            />
            <button onClick={handleAdd}>Añade una tarea</button>
        </div>
    );
}

export default TaskCreation;
