const {Order, Cart, Product, Location, User} = require('../models')
const response = require('../helpers/response')
class Controller {
    static async createCart(req, res, next) {
        try {
            const order = await Cart.create(req.body)
            return response.successResponse(res, order, 'Order created successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getCardByUserId(req, res, next) {
        try {
            const carts = await Cart.findAll({
                where: {
                    UserId: req.params.id
                },
                include: [
                    {
                        model: Product,
                        as: 'product'
                    },
                    {
                        model: Location,
                        as: 'location'
                    },
                    {
                        model: User,
                        as: 'user'
                    }
                ]
            })
            return response.successResponse(res, carts, 'Cart fetched successfully')
        } catch (e) {
            next(e)
        }
    }

    static async updateCart(req, res, next) {
        try {
            console.log(req.body)
            console.log(req.params.id)
            const order = await Cart.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            return response.successResponse(res, order, 'Order updated successfully')
        } catch (e) {
            next(e)
        }
    }

}

module.exports = Controller