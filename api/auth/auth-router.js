const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secrets = require('../../config/secret')
const UsersM = require('../users/users-model')

router.post('/register', (req, res) => {
    let user = req.body
        // hashing the password 2 to the power of 10
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    UsersM.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/login', (req, res) => {
    let { email, password, } = req.body
    // find user by username
    UsersM.loginFindBy({ email })
        .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = assignToken(user)

                    res.status(200).json({
                        token,
                        message: `Welcome ${user.email}`,
                        Id: `${user.id}`
                    })
                } else {
                    res.status(401).json({ message: "Invalid username or password" })
                }
            })
            .catch(err => {
            res.status(500).json(err)
      })
})


//creates and assigns token
function assignToken(user) {
    // setting the payload
    const payload = {
        email: user.email,
        // email: user.email,
        // password: user.password,
    }
    // secret is saved 
    const secret = secrets.jwt

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;
