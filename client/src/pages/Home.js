import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const { data } = await api.get('/tasks');
        setTasks(data);
    };

    const addTask = async (task) => {
        await api.post('/tasks', task);
        fetchTasks();
    };

    const updateTask = async (task) => {
        await api.put(`/tasks/${task._id}`, task);
        fetchTasks();
    };

    const deleteTask = async (taskId) => {
        await api.delete(`/tasks/${taskId}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onSave={addTask} />
            <TaskList tasks={tasks} onEdit={updateTask} onDelete={deleteTask} />
        </div>
    );
};

export default Home;
