const router = require('express').Router();
const controller = require('../controllers/request');

router.get('/user/:id', controller.getAllRequestByUser);
router.post('/', controller.createRequest);
router.get('/', controller.getAllRequests);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);
router.put('/confirm/:id', controller.confirmRequest);

module.exports = router;