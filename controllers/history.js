const {History} = require("../models");
const response = require('../helpers/response')

class historyController {
    static async history(req, res, next) {
        try {
            const hstr = await History.findAll({order: [["createdAt", "DESC"]]});
            return response.successResponse(res, hstr, "History fetched successfully");
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