const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
    
})







app.listen(port, () => console.log(`listening on port ${port}`))