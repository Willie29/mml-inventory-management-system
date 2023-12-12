const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { message: "no_token, login first" };
    }

    const payload = verifyToken(access_token);
    if (payload.message) {
      throw { message: payload.message }
    }
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw { message: "Unauthorized" };
    }

    req.user = {
      id: user.id,
      username: user.username,
      role: user.role
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;