const router = require('express').Router()

const UsersM = require('./users-model')
const restricted  = require('../middlewear/restricted')

router.get('/users', restricted, (req, res) =>{
    UsersM.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.send(err))
}, [])

router.get('/users/:id/', restricted, (req, res) => {
    const id = req.params.id;

    UsersM.findById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    error: "This particular ID can not be found"
                })
            }
        })
})


module.exports = router