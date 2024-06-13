const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books model = sequeL table(WHEN WE SEE MODEL WERE CREATING A SEQUAL MODAL)
class Book extends Model {}//creating book table(we can name it whatever we want)

Book.init(//initliza for what we want in it
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    title: {//all of these are columns(by defualt it creates and id)
      type: DataTypes.STRING//these are restrictions for this column
    },
    author: {
      type: DataTypes.STRING//pulling datatype from sequelize database(we use it to say what the tyoe is)
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    // Link to database connection
    sequelize,//this allows the model to be passed to the database and to create these tables
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,//if you change the table this will change
    underscored: true,//it will convert isPaperBack to underscored
    modelName: 'book'//modelname is called book
  }
);

module.exports = Book;
//table will hold a lot of values which is why a lot of the tim eit is plural
//when you see modelname it is table