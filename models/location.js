const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
            Location.belongsTo(models.Product, {
                foreignKey: 'ProductId',
                targetKey: 'id',
                onDelete: 'SET NULL',
                through: 'Product',
                onUpdate: 'SET NULL'
            })
        }
    }

    Location.init({
        name: DataTypes.STRING,
        stock: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Location',
        timestamps: true
    });

    return Location;
}