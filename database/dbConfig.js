const knex = require('knex')

const knexConfig = require('../knexfile')

const environment = process.env.DB_ENV || 'dev'

module.exports = knex(knexConfig[environment])