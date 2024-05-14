const express = require('express');
const sequelize = require('./config/connection');

// Import model to sync table with database
const Book = require('./models/Book');//importing book it gives server access to the model(you have to do this step for it to work)(you dont need const book just the rest require('./models/Book'); but both will work just fine)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {//sync syncrinizes you rserver to the database(it will create the tables inside of your database)(do not ever put force: true it means you want to build everything from sctratch)
  app.listen(PORT, () => console.log('Now listening'));
});
//Do not every use (force: true) it will delete your data and you will have to rewrite it all