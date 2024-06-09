import React from 'react';
import Task from './Task';

function TaskList({ tasks, removeTask }) {
    // Verifica si la lista de tareas está vacía
    if (tasks.length === 0) {
        return <p>No hay tareas aún, agrega una en el recuadro de abajo</p>; // Mensaje
    }

    // Renderizar la lista de tareas si hay elementos en ella
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Task key={index} task={task} removeTask={() => removeTask(index)} />
            ))}
        </div>
    );
}

export default TaskList;
