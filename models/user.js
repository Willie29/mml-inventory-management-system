'use strict';
const bcyript = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "email tidak boleh null"
        },
        notEmpty: {
          msg: "email harus diisi, tidak boleh kosong"
        },
        isEmail : {
          msg : "Email should be in email format !"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password tidak boleh null"
        },
        notEmpty: {
          msg: "password harus diisi, tidak boleh kosong"
        },
        min: {
          args: 5,
          msg: "Minimum password 5",
        }
      },
    },
    role: DataTypes.STRING,
    position: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true,
    defaultScope: {
      attributes: { exclude: ['password'] }
    }
  });
  User.beforeCreate((instance, options) =>{
    instance.password = bcyript.hashSync(instance.password, 10)
  })
  return User;
};