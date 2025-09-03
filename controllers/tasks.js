const Task = require('../models/tasks');
const asyncWrapper = require('../middlewares/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.json({tasks});
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
})

const getTask = asyncWrapper(async (req, res) => {
    const {id: taskId} = req.params;
    const task = await Task.findOne({_id: taskId});
    if (!task) return res.status(404).json({error: `No task with id ${taskId}`});
    res.json({task});
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id: taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
      new: true,
      runValidators: true
    })
    if (!task) return res.status(404).json({error: `No task with id ${taskId}`});
    res.status(200).json({task});
})

const deleteTask = asyncWrapper( async (req, res) => {
    const {id: taskId} = req.params;
    const task = await Task.findOneAndDelete({_id: taskId});
    if (!task) return res.status(404).json({error: `No task with id ${taskId}`});
    res.status(200).send('Task deleted...');
})


module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
