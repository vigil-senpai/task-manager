const express = require('express')
const router = express.Router()
const {getAllTasks, getTask, createTask, deleteTask, updateTask} = require('../controllers/task')

router.route('/').get(getAllTasks)

router.route('/').patch(updateTask)

router.route('/').post(createTask)

router.route('/').delete(deleteTask)

router.route('/:id').get(getTask)

module.exports = router