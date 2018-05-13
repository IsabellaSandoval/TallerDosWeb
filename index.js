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

// Dirección de visualización de productos de Alquiler de Vehículos
app.get('/genetica/terneras', (req, res) => {

    var ternerasCollection = db.collection('Terneras').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
        ternerasCollection.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });


        //Filtro por edad
    if (req.query.min_ed && req.query.max_ed)
    ternerasCollection.filter({
        edad: {
            $gte: parseInt(req.query.min_ed),
            $lte: parseInt(req.query.max_ed)

        }
    });

    ternerasCollection.toArray((err, result) => {

        res.render('VisualizacionArticulos', {
            Terneras: result
        });
    })
});

//Dirección de visualización de cada producto
app.get('/genetica/terneras/:id', (req, res) => {


    var ternerasCollection = db.collection('Terneras')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
            // console.log(result[0]);
            res.render('productos', {
                Ternera: result[0]

            });
        });

});


//Checkout
app.get('/checkout', (req, res) => {
    res.render('checkout');
});