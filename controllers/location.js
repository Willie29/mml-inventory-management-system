const { Location, Product } = require('../models'); // Import model Location dan Product
const response = require('../helpers/response'); // Import helper response
class Controller {
    static async getAllLocations(req, res, next) {
        try {
            const locations = await Location.findAll();

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

            const location = await Location.findOne({
                where: { id: id },
                include: Product
            });


            if (!location) {
                throw { message: 'Location not found' };
            }

            const locationUpdate = await Location.update(req.body, {
                where: { id: location.id }
            });

            return response.successResponse(res, locationUpdate, 'Successfully get location by id');
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