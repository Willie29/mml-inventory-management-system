const bcrypt = require('bcryptjs')

const hashPassword = (password) => bcrypt.hashSync(password, 8)

const comparePassword = (password, hashpassword) => bcrypt.compareSync(password,hashpassword)


module.exports = {
    hashPassword,
    comparePassword
}