const router = require('express').Router();
const controller = require('../controllers/request');

router.get('/user/:id', controller.getAllProducts);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);
router.put('/confirm/:id', controller.confirmRequest);

module.exports = router;