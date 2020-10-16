// JavaScript Document
// ROUTES
'use strict'

var express = require('express');
var PosteoController = require('../controllers/posteo');

var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', PosteoController.home);
router.post('/test', PosteoController.test);
router.post('/save-posteo', PosteoController.savePosteo);
router.get('/posteo/:id?', PosteoController.getPosteo);
router.get('/posteos', PosteoController.getPosteos);
router.put('/posteo/:id', PosteoController.updatePosteo);
router.delete('/posteo/:id', PosteoController.deletePosteo);
router.post('/upload-image/:id', multipartMiddleware, PosteoController.uploadImage);
router.get('/get-image/:image', PosteoController.getImageFile)

module.exports = router;