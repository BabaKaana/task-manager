const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTask = async (req, res) => {
  try {
    const {id: taskId} = req.params;
    const task = await Task.findOne({_id: taskId});
    if (!task) return res.status(404).json({error: `No task with id ${taskId}`});
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = (req, res) => {
  try {
    const {id: taskId} = req.params;
  } catch (error) {
    
  }
};

const deleteTask = async (req, res) => {
  try {
    const {id: taskId} = req.params;
    const task = await Task.findOneAndDelete({_id: taskId});
    if (!task) return res.status(404).json({error: `No task with id ${taskId}`});
    res.status(200).send('Task deleted...');
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
