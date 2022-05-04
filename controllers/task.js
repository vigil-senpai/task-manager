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
    var searchedTask = await Task.findOne({'_id': searchedID})
    if(!searchedTask) {
        return next(createCustomError(`Can\'t find task with id of ${searchedID}`, 404))
    }
    res.status(200).json({
        success: true, 
        task: searchedTask
    })
})

const createTask = (req, res) => {
    var body = req.body
    if(!body.taskName) {
        return 'error' // customerError
    }
    var createdTask = Task.create(body)
    res.status(201).json({
        success: true, 
        data: createdTask
    })
}

const deleteTask = (req, res) => {
    res.status(200).json({
        success: true, 
        data: req.body
    })
}

const updateTask = (req, res) => {
    res.status(200).json({
        sucess: true, 
        data: req.body
    })
}

module.exports = {
    getAllTasks, 
    getTask, 
    createTask, 
    deleteTask, 
    updateTask
}