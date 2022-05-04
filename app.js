const express = require('express')
const taskRouter = require('./routes/task')
const {connectDatabase} = require('./DB/connect')
const notFound = require('./middleware/not-found')
const customErrorHandler = require('./middleware/custom-error-handler')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/task', taskRouter)

app.use(notFound)
app.use(customErrorHandler)

const startServer = async () => {
    try {
        await connectDatabase(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`[+] Server Starting on Port ${port}`)
        })
    }
    catch(err) {
        console.log(err)
    }
}

startServer()