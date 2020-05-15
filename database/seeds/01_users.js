  const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

exports.seed = async (knex) => {

    // await knex('users').truncate()

    await knex('users').insert([
        { firstName: "Harry", lastName:"Potter", email: "Harry@potter.com", password: `${await hash('testing1')}`},
        { firstName: "Sirius", lastName:"Black", email: "Black@potter.com", password: `${await hash('testing1')}`},
        { firstName: "Steve", lastName:"Rogers", email: "Avengers@stark.com", password: `${await hash('testing1')}`},
        { firstName: "Tony", lastName:"Stark", email: "Ironman@stark.com", password: `${await hash('testing1')}`},
     ])
}