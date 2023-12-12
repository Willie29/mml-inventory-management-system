const jwt = require('jsonwebtoken')

const secret = 'rahasia-ya-amnjing'
const createToken = (payload) => {
    try {
        return jwt.sign(payload, secret, {expiresIn: '24h'})
    } catch (error) {
        return error
    }
}
const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return error
    }
}

module.exports = {
    createToken,
    verifyToken
}