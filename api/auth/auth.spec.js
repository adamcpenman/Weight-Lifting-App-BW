const supertest = require("supertest")
const db = require('../../database/dbConfig')
const server = require("../../server")

  
const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

beforeEach(async () => {
  await db.seed.run()
})

describe("auth router", () => {
  test("register a new user", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({ firstName: "Ron", lastName:"Weasley", email: "Ron@potter.com", password: "testing2" })
    expect(res.status).toBe(201)
  })
    test("register a same email", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({ firstName:"Ginny", lastName:"Weasley", email:"Harry@potter.com", password:"testing2" })
    expect(res.status).toBe(500)
  })


test("login user with correct password", async () => {
    const res = await supertest(server)
     .post("/auth/login")
      .send({ email: "Harry@potter.com", password: "testing1" })
        expect(res.status).toBe(200)
  })
   test("login in user incorrectly", async () => {
      const res = await supertest(server)
      .post("/auth/login")
      .send({ email: "Dobby@potter.com", password: "testing2" })
      expect(res.status).toBe(401)
  })
})