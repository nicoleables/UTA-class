const Sequelize = require('sequelize');
require('dotenv').config();//getting the enveroment variabke from the env file

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  process.env.DB_NAME,
  // User
  process.env.DB_USER,
  // Password
  process.env.DB_PASSWORD,
  {
    // Database location
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
//pg and sequelize have to be installed first in order for this to work