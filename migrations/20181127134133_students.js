
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (students) => {
        students.increments('id')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('table_name')
};
