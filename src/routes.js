const express = require('express');

const routes = express.Router();

const DogController = require('./controllers/DogController');
const TypeController = require('./controllers/TypeController');

routes.get('/dog', DogController.show);
routes.post('/dog', DogController.store);
routes.post('/type', TypeController.create);
routes.get('/types', TypeController.findAll);

module.exports = routes;