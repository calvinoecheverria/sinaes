// JavaScript Document
// CONTROLLERS
'use strict'

//traigo lo que requieren las var
var Posteo = require('../models/posteo');
var fs = require('fs');
var path = require('path');

//creo var controller
var controller = {
//metodo home
  home: function (req, res) {
    return res.status(200).send({
      message: 'soy la home'
    });
  },
    
//metodo test    
  test: function (req, res) {
    return res.status(200).send({
      message: 'soy el metodo test del controlador'
    });
  },

    //metado guardar posteo
  savePosteo: function (req, res) {
    var posteo = new Posteo();

    var params = req.body;
    posteo.author_name = params.author_name;
    posteo.author_surname = params.author_surname;
    posteo.author_img = null;
    posteo.author_bio = params.author_bio;
    posteo.author_birth = params.author_birth;
    posteo.author_death = params.author_death;
    posteo.note = params.note;
    posteo.note_year = params.note_year;
    posteo.note_img = null;
    posteo.description = params.description;
    posteo.link = params.link;

    posteo.save((err, posteoStored) => {
   //  if(err) return res.status(500).send({message: 'error al guardar el posteo'});
   //  if(!posteoStored) return res.status(404).send({message: 'no se ha podido guardar el posteo'});
   // return res.status(200).send({posteo:posteoStored});
      return res.status(200).send({posteo: posteoStored,
                                   message:'Metodo save project'
                                  });
        });

    //  res.status(200).send({posteo: posteoStored});
  //        params: params,
//          posteo: Posteo,
  //        message: 'metodo savePosteo'
          
},
  
  getPosteo: function (req, res) {
    var posteoId = req.params.id;

    if (posteoId == null) return res.status(404).send({
      message: 'El posteo no existe'
    });

    Posteo.findById(posteoId, (err, posteo) => {

      if (err) return res.status(500).send({
        message: 'error al devolver datos'
      });

      if (!posteo) return res.status(404).send({
        message: 'El posteo no existe'
      });

      return res.status(200).send({
        posteo
      });
    });

  },
  getPosteos: function (req, res) {
    Posteo.find({}).exec((err, posteos) => {
      if (err) return res.status(500).send({
        message: 'error al listar posteos'
      });

      if (!posteos) return res.status(404).send({
        message: 'no hay posteos que listar'
      });

      return res.status(200).send({
        posteos
      });

    });
  },
  updatePosteo: function (req, res) {

    var posteoId = req.params.id;
    var update = req.body;

    Posteo.findByIdAndUpdate(posteoId, update, {
      new: true
    }, (err, posteoUpdated) => {
      if (err) return res.status(500).send({
        message: 'error al actualizar'
      });
      if (!posteoUpdated) return res.status(404).send({
        message: 'no existe el posteo para actualizar'
      });

      return res.status(200).send({
        posteo: posteoUpdated
      });
    });
  },
  deletePosteo: function (req, res) {
    var posteoId = req.param.id;

    Posteo.findByIdAndRemove(posteoId, (err, posteoRemoved) => {
      if (err) return res.status(500).send({
        message: 'No se ha podido borrar el posteo'
      });
      if (!posteoRemoved) return res.status(404).send({
        message: 'no se puede eliminar ese posteo'
      });

      return res.status(200).send({
        posteo: posteoRemoved
      });
    });

  },
  uploadImage: function (req, res) {
    var posteoId = req.params.id;
    var fileName = 'Imagen no subida...';

    if (req.files) {
      var filePath = req.files.image.path;
      var fileSplit = filePath.split('/');
      var fileName = fileSplit[1];
      var extSplit = fileName.split('\.');
      var fileExt = extSplit[1];

      if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
        Posteo.findByIdAndUpdate(posteoId, {
          image: fileName
        }, {
          new: true
        }, (err, posteoUpdated) => {
          if (err) return res.status(200).send({
            message: 'La imagen no se ha subido'
          });
          if (!posteoUpdated) return res.status(404).send({
            message: 'El posteo no existe y no se ha subido la imagen'
          });
        });

        return res.status(200).send({
          posteo: posteoUpdated
        });
      } else {

        fs.unlink(filePath, (err) => {
          return res.status(200).send({
            message: 'La extension no es valida'
          });
        });
      }
    } else {
      return res.status(200).send({
        mesage: fileName
      });
    }
  },

  getImageFile: function (req, res) {
    var file = req.params.image;
    var path_file = './uploads/' + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: "No existe la imagen..."
        });
      }
    });
  }

};
module.exports = controller;
