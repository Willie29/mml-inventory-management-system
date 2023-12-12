const router = require('express').Router()
const userRouters = require('./user')
const productRouters = require('./product')
const authRouter = require('./auth')
const historyRouters = require('./history')
const orderRouters = require('./order')
const cartRouters = require('./cart')
const requestRouters = require('./request')
const locationRouters = require('./location')

router.use('/users', userRouters)
router.use('/auth', authRouter)
router.use('/locations', locationRouters)
router.use('/products', productRouters)
router.use('/history', historyRouters)
router.use('/orders', orderRouters)
router.use('/carts', cartRouters)
router.use('/requests', requestRouters)

module.exports = router