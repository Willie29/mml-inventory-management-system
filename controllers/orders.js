const {Order, Product, Location, User, History} = require('../models')
const response = require('../helpers/response')

class Controller {
    static async createOrder(req, res, next) {
        try {
            console.log(req.body)
            const order = await Order.create(req.body)
            await History.create({
                log_type: 'User Order',
                UserId: req.params.id,
                OrderId: order.id
            })
            return response.successResponse(res, order, 'Order created successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getAllOrderByUserId(req, res, next) {
        try {
            const order = await Order.findAll({
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

            return response.successResponse(res, order, 'Order fetched successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getOrderByUserId(req, res, next) {
        try {
            const order = await Order.findOne({
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

            return response.successResponse(res, order, 'Order fetched successfully')
        } catch (e) {
            next(e)
        }
    }
}

module.exports = Controller