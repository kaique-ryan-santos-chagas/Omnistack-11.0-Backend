const express = require('express');
const connection = require('./database/connection');
const crypto = require('crypto');
const routes = express.Router();

routes.post('/ongs', (req, res) => {
	const {name, email, whatsapp, city, uf} = req.body;
	
    return res.json(data);
});


module.exports = routes;