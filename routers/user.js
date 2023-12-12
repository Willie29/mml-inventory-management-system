const router = require('express').Router()
const Controller = require('../controllers/user')

router.get('/', Controller.getAllUser)

module.exports = router