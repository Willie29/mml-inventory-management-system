'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.Location, {
                foreignKey: 'ProductId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    }

    Product.init({
        name: DataTypes.STRING,
        uom: DataTypes.STRING,
        category: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
        timestamps: true
    });

    return Product;

};

