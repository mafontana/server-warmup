const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const queries = require('./queries')


app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
    
})

// app.get('/:id', (req, res) => {
//     queries.getById(req.params.id).then(students => res.send(students))
// })

// app.post('/', (req, res) => {
//     queries.createStudent(req.body).then(students => res.send(students))
// })



app.listen(port, () => console.log(`listening on port ${port}`))