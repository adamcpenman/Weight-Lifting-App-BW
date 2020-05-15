const db = require('../../database/dbConfig')
const ExerciseM = require('./exercise-module')
const ExerciseInfo = require('../exerciseInfo/exerciseInfo-model')

beforeEach(async () => {
    await db.seed.run()
})

// describe('exercise model', () => {
//     test('find', async () => {
//         const res = await ExerciseM.find()
//         expect(res.length).toBeGreaterThan(0)
//     })
//     // test("findByEId", async () => {
//     //     const res = await ExerciseInfo.findByEId(1)
//     //     expect(res.id).toBe(1)
//     // })
//     test("insert", async () => {
//             await ExerciseM.add({ exercise: "Pull-Ups", date: '1/2/20'})
//             const res = await db("exercises").select()
//             expect(res).toHaveLength(14)
//         })
//     test("remove", async () => {
//             await ExerciseM.remove(1)
//             const resources = await ExerciseM.find()
//             expect(resources).toHaveLength(12)
//         })
// })