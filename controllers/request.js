const {Product, Location, History, Request} = require('../models');
const response = require('../helpers/response');

class Controller {
    static async getAllProducts(req, res, next) {
        try {
            const products = await Request.findAll({
                where: {
                    UserId: req.params.id
                },
                include: [{
                    model: Location, // Menghubungkan dengan model Location
                    attributes: ['id', 'name'] // Attribut dari model Location yang ingin di-include
                }]
            });

            res.json({products}); // Mengirimkan produk beserta lokasi terkait
        } catch (err) {
            next(err);
        }
    }

    static async createProduct(req, res, next) {
        try {
            const newRequest = await Request.create(req.body);
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
                throw {message: 'Request not found', statusCode: 404};
            }

            const updatedRequest = await request.update(req.body);
            await History.create({
                log_type: 'Update Request',
                UserId: req.user.id,
                RequestId: updatedRequest.id
            });

            return response.successResponse(res, updatedRequest, 'Request updated successfully');
        } catch (err) {
            next(err);

            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({message: 'Product not found'});
            }

            await product.destroy();

            res.json({message: 'Product deleted successfully'});
        }
    }


    static async confirmRequest(req, res, next) {
        try {
            const {id} = req.params;

            const request = await Request.findByPk(id);
            if (!request) {
                throw {message: 'Request not found', statusCode: 404};
            }

            const updatedRequest = await request.update(req.body);

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