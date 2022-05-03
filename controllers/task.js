const Task = require('../models/task')

const getAllTasks = (req, res) => {
    var allTask = Task.find()
    res.status(200).json({
        success: true, 
        tasks: allTask
    })
}

const getTask = (req, res) => {
    var searchedID = req.params.id
    var searchedTask = Task.findOne({'_id': searchedID})
    if(!searchedTask) {
        return 'error' // customError
    }
    res.status(200).json({
        success: true, 
        task: searchedTask
    })
}

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