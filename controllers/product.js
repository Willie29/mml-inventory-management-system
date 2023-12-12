const {Product, Location} = require('../models')
const response = require('../helpers/response')
const {Op} = require("sequelize");

class Controller {
    static async read(req, res, next) {
        try {
            const {filter} = req.query
            if (filter) {
                const product = await Product.findAll({
                    where: {
                        stock: filter === 'zero' ? {[Op.lt]: 1} : {[Op.gt]: 1}
                    }
                })
                return response.successResponse(res, product, 'Success get data')
            }
            const product = await Product.findAll({
                include: [Location]
            })
            return response.successResponse(res, product, 'Success get data')
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        let body = req.body
        try {
            let data = await Product.create({...body})
            return response.successResponse(res, data, 'Success create data')
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            let {id} = req.params
            let data = await Product.findByPk(+id)
            if (!data) {
                throw {name: 'data not found'}
            }
            await Product.destroy({where: {id}})
            return response.successResponse(res, null, 'Success delete data')
        } catch (error) {
            next(error)
        }
    }

    static async readDetail(req, res, next) {
        try {
            let {id} = req.params
            const query = req.query

            if(query.name){
                const data = await Product.findOne({
                    where: {
                        name: {
                            [Op.like]: `%${query.name}%` // Using the 'like' operator for partial matching
                        }
                    }, include: [{
                        model: Location, attributes: ['name', 'uom'],
                    }]
                })
                if (!data) {
                    throw {message: 'data not found'}
                }
                return response.successResponse(res, data, 'Success get data')
            }

            let data = await Product.findByPk(+id, {
                include: [Location]
            })
            if (!data) {
                throw {message: 'data not found'}
            }
            return response.successResponse(res, data, 'Success get data')
        } catch (error) {
            next(error)
        }
    }

    static async readDetailByName(req, res, next) {
        try {
            let {name} = req.params
            let data = await Product.findOne({
                where: {
                    name
                }, include: [{
                    model: Location, attributes: ['name', 'uom'],
                }]

            })
            if (!data) {
                throw {name: 'data not found'}
            }
            return response.successResponse(res, data, 'Success get data')
        } catch (error) {
            next(error)
        }
    }

    static async replaceProduct(req, res, next) {
        try {
            if (req.body.status) {
                throw {message: "Sorry can't replace status"}
            }
            const product = await Product.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            if (product[0] === 0) throw {message: 'Product Not found'}

            return response.successResponse(res, product, 'Success replace data')
        } catch (error) {
            next(error)
        }
    }

    static async modifyProduct(req, res, next) {
        try {
            const findOneProduct = await Product.findOne({where: {id: req.params.id}})
            if (!findOneProduct) throw {message: "Product not found"}

            const product = await Product.update({status: req.body.status}, {
                where: {
                    id: req.params.id
                },
                returning: true
            });
            if (product[0] === 0) throw {message: 'Product Not found'}
            return response.successResponse(res, product, 'Success modify data')
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller