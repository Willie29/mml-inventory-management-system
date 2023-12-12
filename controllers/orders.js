const {Order, Product, Location, User, History, Cart} = require('../models')
const response = require('../helpers/response')
const {Op} = require("sequelize");

class Controller {
    static async createOrder(req, res, next) {
        try {
            const order = await Order.create({
                ...req.body, UserId: req.params.id
            })
            await History.create({
                log_type: 'User Order', UserId: req.params.id, OrderId: order.id
            })
            return response.successResponse(res, order, 'Order created successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getAllOrders(req, res, next) {
        try {
            const {name} = req.query
            let where = {}
            if(name){
                where = {
                    applicantStaff: {
                        [Op.like]: `%${name}%`
                    }
                }
            }

            const order = await Order.findAll({
                where,
                include: [{
                    model: Product,
                }, {
                    model: Location,
                }, {
                    model: User,
                }]
            })

            return response.successResponse(res, order, 'Order fetched successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getAllOrderByUserId(req, res, next) {
        try {
            const order = await Order.findAll({
                where: {
                    UserId: req.params.id
                }, include: [{
                    model: Product,
                }, {
                    model: Location,
                }, {
                    model: User,
                }, {
                    model: Cart
                }]
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
                }, include: [{
                    model: Product,
                }, {
                    model: Location,
                }, {
                    model: User,
                }, {
                    model: Cart
                }]
            })

            return response.successResponse(res, order, 'Order fetched successfully')
        } catch (e) {
            next(e)
        }
    }

    static async acceptOrders(req, res, next) {
        try {
            const findOrder = await Order.findByPk(req.params.id, {
                include: [
                    {
                        model: Cart,
                        include: [
                            {
                                model: Product
                            }
                        ]
                    }
                ]
            })

            if (!findOrder) {
                throw {message: 'Order not found'}
            }

            if (findOrder.orderStatus === 'completed') {
                throw {message: 'Order already accepted'}
            }

            const order = await Order.update({
                orderStatus: 'accepted',
                confirmTime: new Date()
            }, {
                where: {
                    id: findOrder.id
                }
            })

            console.log(findOrder.Carts)

            findOrder.Carts.forEach(async (cart) => {
                const product = await Product.update({
                    stock: cart.Product.stock - cart.quantity
                }, {
                    where: {
                        id: cart.ProductId
                    }
                })
                if(product[0] === 0) {
                    throw {message: 'Product not found'}
                }
            })

            await History.create({
                log_type: 'User Confirm Order', OrderId: req.params.id
            })
            return response.successResponse(res, order, 'Order updated successfully')
        } catch (e) {
            next(e)
        }
    }
}

module.exports = Controller