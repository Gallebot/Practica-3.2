import React, { useState } from 'react';
import TaskList from './components/Tasklist';
import TaskCreation from './components/TaskCreation';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <TaskList tasks={tasks} removeTask={removeTask} />
            <TaskCreation addTask={addTask} />
        </div>
    );
}

export default App;
