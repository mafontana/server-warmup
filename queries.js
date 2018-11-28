const database = require('./database-connection')

module.exports = {
    listAll(){
          return database('students')
    }
  }


  //notes from lecture
//   module.exports = {
//       getAll() {
//           return db('students')
//       },
//       getById(id) {
//           return db('students').where('id', id)
//       }, 
        // createStudent(newStudent) {
        //     return db('students').insert(newStudent).returning('*')
        // }
//   }