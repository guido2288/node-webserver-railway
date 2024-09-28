const express = require('express')
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');

// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.render('home' , {
        nombre: 'Guido',
        titulo: 'Curso de NodeJs'
    });
})


app.get('/elements', function (req, res) {
    res.render('elements' , {
        nombre: 'Guido',
        titulo: 'Curso de NodeJs'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic' , {
        nombre: 'Guido',
        titulo: 'Curso de NodeJs'
    });
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port)