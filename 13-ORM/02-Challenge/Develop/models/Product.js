// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      alllowNull: false,
      validate: {
        isDecimal: true
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      alllowNull: false,
      validate: {
        isDecimal: true
      },
  },
  price: {
    type: DataTypes.DECIMAL,
    alllowNull: false,
    validate: {
      isDecimal: true
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
