const { Location, Product } = require('../models'); // Import model Location dan Product
const response = require('../helpers/response'); // Import helper response
class Controller {
    static async getAllLocations(req, res, next) {
        try {
            const locations = await Location.findAll({
                include: [{
                    model: Product, // Menghubungkan dengan model Product
                    attributes: ['id', 'name', 'stock'] // Attribut dari model Product yang ingin di-include
                }]
            });

            if(!locations) throw { message: 'LocationNotFound' } // Jika lokasi tidak ditemukan, lemparkan error (akan ditangkap oleh middleware error

            return response.successResponse(res, locations, 'Successfully get all locations'); // Kirim response dengan helper response
        } catch (err) {
            next(err);
        }
    }

    static async createLocation(req, res, next) {
        try {
            const { name } = req.body;
            const newLocation = await Location.create({ name });
            return response.successResponse(res, newLocation, 'Successfully create new location');
        } catch (err) {
            next(err);
        }
    }

    static async updateLocation(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const location = await Location.findByPk(id);
            if (!location) {
                throw { message: 'Location not found' };
            }

            location.name = name;
            await location.save();

            return response.successResponse(res, location, 'Successfully update location');
        } catch (err) {
            next(err);
        }
    }

    static async deleteLocation(req, res, next) {
        try {
            const { id } = req.params;

            const location = await Location.findByPk(id);
            if (!location) {
                throw { message: 'Location not found' };
            }

            await location.destroy();
            return response.successResponse(res, null, 'Successfully delete location');
        } catch (err) {
            next(err);
        }
    }

}

module.exports = Controller;