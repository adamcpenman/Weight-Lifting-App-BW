const db = require('../../database/dbConfig')

function find() {
    return db('users')
        .select( 'id', 'firstName','lastName', 'email')
}

function loginFindBy(filter) {
    return db('users').where(filter)
        .select('id', 'firstName', 'lastName', 'password','email').first()
}

function findBy(filter) {
    return db('users').where(filter)
        .select('id', 'firstName', 'lastName','email').first()
}

function findById(id) {
    return db('users')
        .where({ id })
        .select('id', 'firstName', 'lastName', 'email')
        .first()
        
}

function add(user) {
    return db('users').insert(user).returning('*')
}

// async function add(user) {
//     const [id] = await db('users').insert(user)

//     return findById(id)
// }


// function add (user) {
//     return db('users')
//         .insert(user)
//         .then(ids => {
//             const [ id ] = ids;
//             return db('users')
//             .select('id', 'username', 'email')
//             .where({ id })
//             .first()
//     })
// }

function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes)
        .returning('*')
    //     .then(id => {
    //         if (id > 0 ){
    //             findById(id)
    //         } else {
    //             return null
    //         }
    // })
}

function remove(id) {
    return db('users')
        .where({ id })
        .del()
}



module.exports = {
    find,
    findBy,
    findById,
    loginFindBy,
    add,
    update,
    remove,
}