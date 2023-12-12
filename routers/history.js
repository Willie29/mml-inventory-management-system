const router = require('express').Router()
const Controller = require('../controllers/history')
const authorization = require('../middlewares/authorization')

router.get('/', Controller.history)

module.exports = router