const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Request extends Model {
        static associate(models) {
            // define association here
            Request.belongsTo(models.User, {
                foreignKey: "UserId"
            })
            Request.belongsTo(models.Product, {
                foreignKey: "ProductId"
            })
            Request.belongsTo(models.Location, {
                foreignKey: "LocationId"
            })
        }
    };
    Request.init({
        UserId: DataTypes.INTEGER,
        ProductId: DataTypes.INTEGER,
        LocationId: DataTypes.INTEGER,
        uom: DataTypes.STRING,
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Quantity cannot be null"
                },
                notEmpty: {
                    msg: "Quantity cannot be empty"
                },
                isInt: {
                    msg: "Quantity must be an integer"
                },
                min: {
                    args: [1],
                    msg: "Quantity must be greater than 0"
                }
            }
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "pending"
        },
        confirmTime: {
            type: DataTypes.DATE,
            defaultValue: null
        },
    }, {
        sequelize,
        modelName: 'Request',
        timestamps: true, // Enable auto-generated timestamps
    });
    return Request;
}