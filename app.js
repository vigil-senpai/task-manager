const express = require('express')
const taskRouter = require('./routes/task')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/task', taskRouter)

// temporary not found
app.use((req, res) => {
    res.status(404).send('not found')
})

const startServer = async () => {
    app.listen(port, () => {
        console.log(`[+] Server Starting on Port ${port}`)
    })
}

startServer()