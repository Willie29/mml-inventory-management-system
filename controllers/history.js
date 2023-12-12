const { History } = require("../models");
class historyController {
  static async history(req, res, next) {
    try {
      const hstr = await History.findAll({ order: [["createdAt", "DESC"]] });
      res.status(200).json(hstr);
    } catch (error) {
      next(error);
    }
  }

  static async newHistory(id, description, name) {
    try {
      return await History.create({
        updatedBy: id, description, name
      })
    } catch (error) {
      return error
    }
  }
}

module.exports = historyController