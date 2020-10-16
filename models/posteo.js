// JavaScript Document
// MODELS
'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PosteoSchema = Schema({
    author_name: String,
    author_surname: String,
    author_img: String,
    author_bio: String,
    author_birth: Number,
    author_death: Number,
    note: String,
    note_year: String,
    note_img: String,
    description: String,
    link: String
});
module.exports = mongoose.model('Posteo', PosteoSchema);
//renombre la coleccion de la base de datos a posteos