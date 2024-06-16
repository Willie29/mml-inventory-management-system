const {Order, Cart, Product, Location, User} = require('../models')
const response = require('../helpers/response')
class Controller {
    static async createCart(req, res, next) {
        try {
            const order = await Cart.create({
                ...req.body, UserId: req.params.id
            })
            return response.successResponse(res, order, 'Order created successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getCartByUserId(req, res, next) {
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

    // static async deleteCart(req, res, next) {
    //     try {
    //         const cartId = req.params.id;
    //         const cart = await Cart.findByPk(cartId);
    
    //         if (!cart) {
    //             return res.status(404).json({ message: 'Cart not found' });
    //         }
    
    //         // Delete the cart
    //         await cart.destroy();
    
    //         // Return a success response
    //         return response.successResponse(res, null, 'Cart deleted successfully');
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}

module.exports = Controller