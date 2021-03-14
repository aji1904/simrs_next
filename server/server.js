const express = require('express')
const app = express()
const port = 4000
import config from 'config'

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get

app.listen (port, () => {
    console.log(`server running port : ${port}`)
})