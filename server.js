// -------------- CONFIG

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const PORT = 4000;


// Set View Engine
app.set('view engine', 'ejs');

const recipesCtrl = require('./controllers/recipesController');

// -------------- MIDDLEWARE

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// -------------- ROUTE

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/recipes', recipesCtrl);

// -------------- LISTENER

app.listen(PORT, () => console.log('Listening on PORT: ', PORT));