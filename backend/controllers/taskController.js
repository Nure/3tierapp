const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
};
