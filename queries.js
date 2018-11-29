const database = require('./database-connection')

module.exports = {
    listAll(){
          return database('students')
    },
    getById(id) {
        return db('students').where('id', id)
        }, 
    createStudent(newStudent) {
        return db('students').insert(newStudent).returning('*')
        },
    deleteStudent(id){
        return db('students')
            .where('id', id)
            .delete()
          }
    }
    
  


