const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, {
                foreignKey: "UserId",
                targetKey: "id",
                sourceKey: "UserId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
            Order.hasMany(models.Cart, {
                foreignKey: "OrderId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
            Order.belongsTo(models.Product, {
                foreignKey: "ProductId",
                targetKey: "id",
                sourceKey: "ProductId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
            Order.belongsTo(models.Location, {
                foreignKey: "LocationId",
                targetKey: "id",
                sourceKey: "LocationId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        }
    };
    Order.init({
        UserId: DataTypes.INTEGER,
        applicantStaff: DataTypes.STRING,
        activity: DataTypes.STRING,
        division: DataTypes.STRING,
        orderStatus: {
            type: DataTypes.STRING,
            defaultValue: "pending",
        },
        confirmTime: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        machine: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
        timestamps: true
    });
    return Order;
}