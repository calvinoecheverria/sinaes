// JavaScript Document
'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

//cargar archivo de rutas
var posteo_routes = require('./routes/posteo');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/', express.static('client', {redirect: false}));
//app.use(express.static(path.join(__dirname, 'client')));
app.use('/api', posteo_routes);

app.get('*', function(req, res, next){
    res.sendFle(path.resolve('client/index.html'));
});

//app.get('/', (req, res) => {res.status(200).send("<h1>Pagina de Inicio</h1>");});

//app.get('/test', (req, res) => {console.log(req.body.);
  //                              res.status(200).send({message: "Hola mundo desde mi API de NodeJS"});
    //                            });

//exportar
module.exports = app;
