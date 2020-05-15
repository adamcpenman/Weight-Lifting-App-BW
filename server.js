const express = require('express')
const cors = require('cors');
const helmet = require("helmet")

const authRouter = require('./api/auth/auth-router')
const UserRouter = require('./api/users/users-router')
const ExerciseRouter = require('./api/exercise/exercise-router')
const ExerciseInfoRouter = require('./api/exerciseInfo/exerciseInfo-router')

const restricted = require('./api/middlewear/restricted')

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())


server.use('/auth', authRouter, UserRouter);
server.use('/user', ExerciseRouter);
server.use('/exercise', ExerciseInfoRouter)


server.get("/", (req, res) => {
  res.status(200).json({ api: "BW_LAMBDA_BACK_END", dbenv: process.env.DB_ENV });
});


module.exports = server;