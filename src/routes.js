const express = require('express');
const PostController = require('./controllers/PostController');
const routes = new  express.Router();

routes.post('/posts',PostController.Store);

module.exports = routes;

