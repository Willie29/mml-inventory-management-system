const {User, Product} = require('../models')
const {comparePassword} = require('../helpers/bcrypt');
const {createToken} = require('../helpers/jwt')
const response = require('../helpers/response')
const {Op} = require("sequelize");

class Controller {
    static async register(req, res, next) {
        try {
            const requiredFields = ['username', 'email', 'password', 'role', 'phone', 'position', 'firstName', 'lastName'];

            // Check if any required field is empty in the request body
            const emptyFields = requiredFields.filter(field => !req.body[field]);
    
            if (emptyFields.length > 0) {
                const errorMessage = "Fields can\'t be empty: " + emptyFields.map(field => `${field}`).join(`, `);
                return res.status(400).json({ message: errorMessage });
            }

            const checkUser = await User.findOne({
                where: {
                    username: req.body.username
                }
            });
    
            if (checkUser) {
                return res.status(400).json({ message: 'Username is already in use' });
            }

            const user = await User.create(req.body);

            return response.successResponse(res, null, `${user.username} with email ${user.email} has been created`);
        } catch (error) {
            next(error);
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

            res.cookie('jwt_token', token, { 
                httpOnly: true, 
                maxAge: 1 * 60 * 1000 
            });

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
            const {name, role} = req.query
            let where = {}

            if(name){
                where = {
                    firstName: {
                        [Op.like]: `%${name}%`
                    }
                }
            }

            if(role){
                where = {
                    role: {
                        [Op.like]: `%${role}%`
                    }
                }
            }

            if(name && role){
                where = {
                    firstName: {
                        [Op.like]: `%${name}%`
                    },
                    role: {
                        [Op.like]: `%${role}%`
                    }
                }
            }

            const users = await User.findAll({
                attributes: {exclude: ['password']},
                where
            })
            return response.successResponse(res, users, 'Success get all user')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller