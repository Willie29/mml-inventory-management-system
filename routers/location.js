const router = require('express').Router();
const locationController = require('../controllers/location');

router.get('/', locationController.getAllLocations);
router.post('/', locationController.createLocation);
router.put('/:id', locationController.updateLocation);
router.put('/product/:id', locationController.updateLocationByProductId);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;