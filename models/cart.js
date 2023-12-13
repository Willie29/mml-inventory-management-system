const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            // define association here
            Cart.belongsTo(models.User, {
                foreignKey: "UserId",
            })
            Cart.belongsTo(models.Product, {
                foreignKey: "ProductId",
            })
            Cart.belongsTo(models.Order, {
                foreignKey: "OrderId",
            })
            Cart.belongsTo(models.Location, {
                foreignKey: "LocationId",
                targetKey: "id",
            })
        }
    }

    Cart.init({
        UserId: {
            type: DataTypes.INTEGER,
        },
        ProductId: DataTypes.INTEGER,
        LocationId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        uom: DataTypes.STRING,
    }, {
        sequelize, modelName: 'Cart',
        timestamps: true
    });
    return Cart;
}