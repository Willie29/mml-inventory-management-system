const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, {
                foreignKey: "UserId",
                as : "User",
                targetKey: "id",
                sourceKey: "UserId",
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
            Order.hasMany(models.Cart, {
                foreignKey: "CartId",
                as : "Carts"
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