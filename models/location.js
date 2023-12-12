const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
        }
    }

    Location.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Location',
        timestamps: true
    });

    return Location;
}