const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController.js');
const IncidentsController = require('./controllers/incidentsController.js');
const ProfileController = require('./controllers/profileController.js');
const SessionController = require('./controllers/sessionController.js');

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs/create', OngController.create);
routes.delete('/ongs/:ongName', OngController.delete);
routes.get('/ongs/search', OngController.searchOng);

routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.searchIncident);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents/create', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;