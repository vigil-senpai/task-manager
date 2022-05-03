const getAllTasks = (req, res) => {
    res.status(200).json({success: true})
}

const getTask = (req, res) => {
    var searched_id = req.params.id
    res.status(200).json({
        success: true, 
        id: searched_id
    })
}

const createTask = (req, res) => {
    res.status(201).json({
        success: true, 
        data: req.body
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