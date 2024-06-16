const {Product, Location, History, Request, User} = require('../models');
const response = require('../helpers/response');
const {Op} = require("sequelize");

class Controller {
    static async getAllRequestByUser(req, res, next) {
        try {

            const {status, name_product} = req.query;

            const where = {
                UserId: req.params.id
            }

            const whereProduct = {}

            if(name_product){
                whereProduct.name = {
                    [Op.like]: `%${name_product}%`
                }
            }

            if (status) {
                where.status = status
            }

            const products = await Request.findAll({
                where
                , include: [
                    {
                        model: Location, // Menghubungkan dengan model Location
                        attributes: ['id', 'name'] // Attribut dari model Location yang ingin di-include
                    },
                    {
                        model: Product, // Menghubungkan dengan model Product
                        attributes: ['id', 'name', 'category'], // Attribut dari model Product yang ingin di-include
                        where: whereProduct
                    },
                    {
                        model: User, // Menghubungkan dengan model User
                    }
                ]
            });

            return response.successResponse(res, products, 'Request retrieved successfully');
        } catch (err) {
            next(err);
        }
    }

    static async getAllRequests(req, res, next) {
        try {
            // const {user_id, status, name} = req.query; // Assuming the search parameters are passed in the query string


            // // Build the query object based on the existence of search parameters
            // const options = {
                // include: [{
                //     model: Location, attributes: ['id', 'name', 'qty']
                // }, {
                //     model: Product, attributes: ['id', 'name', 'category']
                // }, {
                //     model: User
                // }]
            // };


            // if (user_id) {
            //     options.where = {
            //         UserId: {[Op.like]: `%${user_id}%`} // Searching product by name
            //     };
            // }

            // if(status){
            //     options.where = {
            //         status: status
            //     };
            // }

            // if(name){
            //     options.include[1].where = {
            //         name: {
            //             [Op.like]: `%${name}%`
            //         }
            //     }
            // }

            const products = await Request.findAll({
                include: [{
                    model: Location, attributes: ['id', 'name', 'qty']
                }, {
                    model: Product, attributes: ['id', 'name', 'category']
                }, {
                    model: User
                }]
            });
            return response.successResponse(res, products, 'Request retrieved successfully');
        } catch (err) {
            console.log(err)
            next(err);
        }
    }


    static async getRequestById(req, res, next) {
        try {
            const {id} = req.params;

            const request = await Request.findByPk(id, {
                include: ['Location', 'Product', 'User']
            });
            if (!request) {
                throw {message: 'Request not found', statusCode: 404};
            }

            return response.successResponse(res, request, 'Request retrieved successfully');
        } catch (err) {
            next(err);
        }
    }

    static async createRequest(req, res, next) {
        try {
            const newRequest = await Request.create({
                ...req.body, UserId: req.params.id
            });
            return response.successResponse(res, newRequest, 'Request created successfully');
        } catch (err) {
            next(err);
        }
    }

    static async updateProduct(req, res, next) {
        try {
            const {id} = req.params;

            const request = await Request.findByPk(id);

            if (!request) {
                throw {message: 'Request not found', statusCode: 404}
            }

            const updatedRequest = await request.update(req.body);
            await History.create({
                log_type: 'Update Request', UserId: request?.UserId, RequestId: updatedRequest.id
            });

            return response.successResponse(res, updatedRequest, 'Request updated successfully');
        } catch (err) {
            next(err);
        }
    }


    static async confirmRequest(req, res, next) {
        try {
            const {id} = req.params;

            const request = await Request.findByPk(id);
            if (!request) {
                throw {message: 'Request not found', statusCode: 404};
            }

            const updatedRequest = await request.update({
                status: 'confirmed',
                confirmTime: new Date(),
                quantity: req.body.quantity
            }, {
                where: {
                    id: request.id
                }
            })

            return response.successResponse(res, updatedRequest, 'Request updated successfully');
        } catch (err) {
            next(err);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const {id} = req.params;

            const request = await Request.findByPk(id);
            if (!request) {
                throw {message: 'Request not found', statusCode: 404};
            }

            await request.destroy();

            return response.successResponse(res, null, 'Request deleted successfully');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;