const router = require('express').Router()
const Controller = require('../controllers/history')

router.get('/', Controller.history)

module.exports = router