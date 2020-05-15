const jwt = require("jsonwebtoken")

const secret = require('../../config/secret')

module.exports = (req, res, next) => {
  const {authorization}  = req.headers
    if ( authorization ) {
    jwt.verify( authorization, secret.jwt, function (err, decodeToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token, Go away Muggle!"})
      } else {
        req.token = decodeToken
        next()
      }
    })
  } else {
    res.status(400).json({ message: "Try again!"})
  }
}