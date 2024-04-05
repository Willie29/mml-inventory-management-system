const jwt = require('jsonwebtoken')

const secret = 'mmlsecretcode123'
const createToken = (payload) => {
    try {
        return jwt.sign(payload, secret, {expiresIn: '10m'})
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