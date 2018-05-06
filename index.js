const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('ElSaman');

    // Iniciar servidor
    app.listen(5000);
});


// Dirección del index
app.get('/index', (req, res) => {
    res.render('index');
});


app.get('/genetica', (req, res) => {

    var carroCollection = db.collection('Terneras').find();

    carroCollection.toArray((err, result) => {

        res.render('visualizacionArticulos', {
            carros: result
        });
    })
});