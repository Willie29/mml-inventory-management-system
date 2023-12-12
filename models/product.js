'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Location, {
                foreignKey: 'LocationId',
                targetKey: 'id',
                sourceKey: 'LocationId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    }

    Product.init({
        name: DataTypes.STRING,
        uom: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        category: DataTypes.STRING,
        LocationId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
        timestamps: true
    });

    return Product;

};

