const db = require('../../database/dbConfig')

async function find() {
    const exerciseInfo = await db('exerciseInfo').select('*')
        return exerciseInfo.map((exercise) => {
            return {...exercise, completed: exercise.completed === 1 ? true: false}
        })
    // return db('exerciseInfo')
    //     .select('*')
}

async function findBy(filter) {
    const exerciseInfo = await db('exerciseInfo').where(filter).select('*')
        return exerciseInfo.map((exercise) => {
            return {...exercise, completed: exercise.completed === 1 ? true: false}
        })
    // return db('exerciseInfo').where(filter)
    //     .select('*')
}

async function findById(id) {
   const exerciseInfo = await db('exerciseInfo')
        .join('exercises', 'exercises.id','exerciseInfo.exerciseId')
        .where('exerciseInfo.id', id)
        .select('exerciseInfo.*', 'exercises.exercise')
    return exerciseInfo.map((exercise) => {
        return {...exercise, completed: exercise.completed === 1 ? true: false}
        })
}

async function findByEId(id) {
    const exerciseInfo = await db('exercises')
        .join('exerciseInfo', 'exerciseInfo.exerciseId','exercises.id')
        .where('exercises.id', id)
        .select('exerciseInfo.*', 'exercises.exercise')
    return exerciseInfo.map((exercise) => {
        return {...exercise, completed: exercise.completed === 1 ? true: false}
        })
}

function add (exercise, id) {
    return db('exerciseInfo')
        .insert({...exercise, exerciseId: id})
        .then(ids => {
            const [ id ] = ids;
            return db('exerciseInfo')
            .where({ id })
            .first()
        })
}
c

function update(changes, id) {
    return db('exerciseInfo')
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
    return db('exerciseInfo')
        .where({ id })
        .del()
}



module.exports = {
    find,
    findBy,
    findById,
    findByEId,
    add,
    update,
    remove,
}