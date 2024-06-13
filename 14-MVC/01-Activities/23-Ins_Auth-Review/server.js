const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });//adding front end to the middleware as backend
// session + secret = encryption =
const sess = {
  secret: 'Super secret secret',//this is what it uses to encrypt your sesson(you can put this name as anything)
  cookie: {},//this allows us to put in things like 
  resave: false,//anytime it gets rerun it re saves the data(this is something you do not want to do)
  saveUninitialized: true,//do we want to save it yes we do
  store: new SequelizeStore({//to preserve our data in case our server goes down
    db: sequelize
  })
};

app.use(session(sess));//

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());//these 3 lines get run on every single route
app.use(express.urlencoded({ extended: true }));
//for our front end code we tell it where our static files are and it creates routes for them
app.use(express.static(path.join(__dirname, 'public')));//If it is in your public folder it will create routes for every one of them
//app.get('/public', (req, res) => {
  // res.sendFile('jass.css')
//})

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
