const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController.js');

routes.post('/ongs', OngController.create);

module.exports = routes;