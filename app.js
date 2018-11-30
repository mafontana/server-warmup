const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const queries = require('./queries')
var cors = require('cors')


app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students))
})

app.delete('/:id', (req, res) => {
    queries.deleteStudent(request.params.id).then(res.sendStatus(204))
})

app.put("/:id", (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(updatedStudent => res.json(updatedStudent[0])).returning('*')
})

app.listen(port, () => console.log(`listening on port ${port}`))