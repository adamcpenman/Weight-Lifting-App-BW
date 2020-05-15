const db = require('../../database/dbConfig')

function find() {
    return db('exercises')
        .select('*')
}

function findBy(filter) {
    return db('exercises').where(filter)
        .select('*').first()
}

function findById(userId) {
    return db('exercises')
        .where({ userId })
}

function add (exercise, id) {
    return db('exercises')
        .insert({...exercise, userId: id})
        .then(ids => {
            const [ id ] = ids;
            return db('exercises')
            .where({ id })
            .first()
    })
}

function update(changes, id) {
    return db('exercises')
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
    return db('exercises')
        .where({ id })
        .del()
}



module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
}

