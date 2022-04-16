const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({succes: true})
})

const startServer = async () => {
    app.listen(port, () => {
        console.log(`[+] Server Starting on Port ${port}`)
    })
}

startServer()