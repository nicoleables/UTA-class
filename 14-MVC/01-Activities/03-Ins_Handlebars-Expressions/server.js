// ? Dependencies
const express = require('express');
const exphbs = require('express-handlebars');//emport
const path = require('path');
const hbs = exphbs.create({});//create our handle bars library

// ? Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// ? Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);//creating a new engine that uses handlebars for ecpress in order to render the pages in order hoe handlebar wants them and we name it handlebars(we can name it whatever we want)
app.set('view engine', 'handlebars');//view engine is built in and knows what your doing and the handlebars is whatever you created and named(setting what we just created as the view engine)

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
