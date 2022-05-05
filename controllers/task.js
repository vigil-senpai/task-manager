const Task = require('../models/task')
const asyncWrapper = require('../middleware/async-wrapper')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    var allTasks = await Task.find()
    res.status(200).json({
        success: true, 
        tasks: allTasks
    })
})

const getTask = asyncWrapper(async (req, res, next) => {
    var searchedID = req.params.id
    var searchedTask = await Task.findOne({'_id': searchedID});
    if(!searchedTask) {
        return next(createCustomError(`Can\'t find task with id of ${searchedID}`, 404))
    }
    res.status(200).json({
        success: true, 
        task: searchedTask
    })
})

const createTask = asyncWrapper(async (req, res, next) => {
    var body = req.body
    if(!body.taskName) {
        return next(createCustomError('Please input task name', 400))
    }
    var taskData = {
        taskName: body.taskName, 
        description: body.description, 
        completed: body.completed
    }
    Task.create(taskData)
    res.status(201).json({
        success: true, 
        task: taskData
    })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    var deletedID = req.body._id
    var deletedTask = await Task.findOneAndDelete({'_id': deletedID})
    if(!deletedTask) {
        return next(createCustomError(`Can\'t find task with id of ${deletedID}`, 404))
    }
    res.status(200).json({
        sucess: true, 
        task: null
    })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    var updatedID = req.body._id
    var newData = req.body.data
    var updatedTask = await Task.findOneAndUpdate({'_id': updatedID}, newData, {runValidators: true})
    if(!updateTask) {
        return next(createCustomError(`Can\'t find task with id of ${deletedID}`, 404))
    }
    res.status(200).json({
        sucess: true, 
        task: updatedTask
    })
})

module.exports = {
    getAllTasks, 
    getTask, 
    createTask, 
    deleteTask, 
    updateTask
}