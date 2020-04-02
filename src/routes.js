const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController.js');
const IncidentsController = require('./controllers/incidentsController.js');

routes.get('/ongs', OngController.index);
routes.post('/ongs/create', OngController.create);
routes.post('/ongs/delete', OngController.delete);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents/create', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;