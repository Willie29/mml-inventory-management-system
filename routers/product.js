const router = require('express').Router()
const Controller = require('../controllers/product')

router.get('/', Controller.read)
router.post('/', Controller.create)
router.get('/detail/:id', Controller.readDetail)
router.put('/put/:id', Controller.replaceProduct)
router.put('/update/:id', Controller.modifyProduct)
router.delete('/delete/:id', Controller.delete)

module.exports = router