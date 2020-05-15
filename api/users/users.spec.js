const db = require('../../database/dbConfig')
const UsersM = require('./users-model')

beforeEach(async () => {
    await db.seed.run()
})

describe('User Model', () => {
    test('find', async () => {
        const res = await UsersM.find()
        expect(res.length).toBeGreaterThan(0)
    })
    test("findById", async () => {
        const res = await UsersM.findById(1)
        expect(res.id).toBe(1)
    })
})