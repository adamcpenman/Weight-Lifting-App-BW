
exports.up =  async function(knex) {
  await knex.schema.createTable('exerciseInfo', (table) => {
        table.increments('id')

        table.string('weight', 128).notNullable()

        table.integer('reps').notNullable()

        table.integer('sets').notNullable()

        table.string('region').notNullable()

        table.boolean('completed').defaultTo(false)

        table
            .integer('exerciseId')
            .notNullable()
            .references('id')
            .inTable('exercises')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('exerciseInfo')
};
