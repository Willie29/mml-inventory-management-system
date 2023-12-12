const {User, Product} = require('../models')
const {comparePassword} = require('../helpers/bcrypt');
const {createToken} = require('../helpers/jwt')
const response = require('../helpers/response')

class Controller {
    static async register(req, res, next) {
        try {
            const user = await User.create(req.body)

            return response.successResponse(res, null, `Admin ${user.username} with email ${user.email} has been created`)
        } catch (error) {
            if (error.original.code === '23502') {
                throw res.status(400).json({message: `Username is empty`});
            }
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            let {username, password} = req.body

            if (!username) throw {name: "unauthorize", message: "invalid input username or password"}
            if (!password) throw {name: "unauthorize", message: "invalid input username or password"}
            console.log(Product)

            let findUser = await User.findOne({
                where: {
                    username: username
                },
                attributes: {
                    include: ['password']
                }
            });
            if (!findUser) {
                throw {name: "unauthorize", message: "User not found"};
            }
            const passwordValidation = comparePassword(password, findUser.password)
            if (!passwordValidation) {
                throw {name: "unauthorize", message: "invalid validate input email or password"};
            }
            const payload = {
                userId: findUser.id,
                role: findUser.role,
                username: findUser.username,
                email: findUser.email,
            };
            const token = createToken(payload);
            const data = {
                id: findUser.id,
                token,
                email: findUser.email,
                username: findUser.username,
                nama: findUser.firstName + " " + findUser.lastName,
                position: findUser.position,
                role: findUser.role
            }
            return response.successResponse(res, data, 'Success Login')
        } catch (error) {
            next(error);
        }
    }

    static async getAllUser(req, res, next) {
        try {
            const users = await User.findAll({attributes: {exclude: ['password']}})
            return response.successResponse(res, users, 'Success get all user')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller