const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("<h2>Node app application testing</h2></br><input type='text' />")
})

app.listen('80', console.log('Server is listening on port 80...'))