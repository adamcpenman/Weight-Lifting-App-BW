
exports.up = async function(knex) {
  await knex.schema.createTable('exercises', (table) => {
    table.increments('id')
    table.string('exercise', 128).notNullable()
    table.string('date', 128).notNullable()

    table
        .integer('userId')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('exercises')
};
