const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
            // define association here
            Location.belongsTo(models.Product, {
                foreignKey: 'ProductId',
                targetKey: 'id',
                sourceKey: 'ProductId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    }

    Location.init({
        name: DataTypes.STRING,
        qty: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Location',
        timestamps: true
    });

    return Location;
}