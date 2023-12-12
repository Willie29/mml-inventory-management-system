'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            History.belongsTo(models.User, {
                foreignKey: "UserId"
            }),
                History.belongsTo(models.Request, {
                    foreignKey: "RequestId"
                }),
                History.belongsTo(models.Order, {
                    foreignKey: "OrderId"
                })
        }
    }

    History.init({
        log_type: DataTypes.STRING,
        UserId: DataTypes.INTEGER,
        RequestId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'History',
        timestamps: true,
    });
    return History;
};