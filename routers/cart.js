const router = require('express').Router();
const cartController = require('../controllers/cart');

router.get('/user/:id', cartController.getCartByUserId);
router.post('/user/:id', cartController.createCart);
router.put('/:id', cartController.updateCart);

module.exports = router;