const router = require('express').Router();
const controller = require('../controllers/request');

router.get('/user/:id', controller.getAllRequestByUser);
router.post('/user/:id', controller.createRequest);
router.get('/', controller.getAllRequests);
router.put('/:id', controller.updateProduct);
router.get('/detail/:id', controller.getRequestById);
router.delete('/:id', controller.deleteProduct);
router.put('/confirm/:id', controller.confirmRequest);

module.exports = router;