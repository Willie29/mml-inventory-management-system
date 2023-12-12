const { Product } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authorization = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token
    if (!access_token) {
      return res.status(401).json({ message: 'Access token not found' })
    }
    const decode = verifyToken(access_token)
    if (decode.message) {
      return res.status(500).json({ message: decode.message })
    }
    req.user = {
      id: decode.id,
      role: decode.role
    }
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      throw { message: "Data not found" }
    }
    if (req.user.role === 'Staff' && product.AuthorId === req.user.id) {
      return next()
    } else if (req.user.role === 'Admin') {
      return next()
    } else {
      throw { message: "Forbidden" }
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authorization