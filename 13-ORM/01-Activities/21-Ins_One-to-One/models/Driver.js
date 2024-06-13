const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Driver extends Model {}

Driver.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,//pass connection
    timestamps: false,//dont add time table
    freezeTableName: true,
    underscored: true,//multiple word to snakecase
    modelName: 'driver',//name our table driver
  }
);

module.exports = Driver;
