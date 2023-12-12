const router = require('express').Router()
const Controller = require('../controllers/orders')

router.post('/user/:id', Controller.createOrder)
router.get('/', Controller.getAllOrders)
router.get('/user/:id', Controller.getAllOrderByUserId)
router.get('/detail/user/:id', Controller.getOrderByUserId)
router.post('/confirm/:id', Controller.acceptOrders)

module.exports = router