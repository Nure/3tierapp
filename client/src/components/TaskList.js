import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <div key={task._id}>
                    <h3>{task.title}</h3>
                    <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
