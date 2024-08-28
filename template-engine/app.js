const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const morgan = require('morgan');

app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).send('404 Not found');
});

module.exports = app;