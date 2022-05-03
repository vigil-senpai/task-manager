const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String, 
        required: [true, 'Please provide name'], 
        maxlength: [50, 'Name must be less than 50 characters'], 
        trim: true
    },
    description: {
        type: String, 
        required: false
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)