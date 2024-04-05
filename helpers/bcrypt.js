const bcrypt = require('bcryptjs')

const comparePassword = (password, hashpassword) => bcrypt.compareSync(password,hashpassword)


module.exports = {
    comparePassword
}