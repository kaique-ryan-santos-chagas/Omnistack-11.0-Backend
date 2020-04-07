const connection = require('../database/connection');

module.exports = {
	index: async (req, res) => {
		const ongId = req.headers.authorization;
		const incidentId = await connection('incidents').where('ong_id', ongId)
		.select('ong_id').first();
		if(incidentId.ong_id != ongId){
			return res.status(401).json({ error: 'Not found incident created by Ong'});
		}
		
		const incident = await connection('incidents').where('ong_id', ongId)
		.select('*');
		return res.json(incident);
	},

	searchIncident: async (req, res) => {
		const incidentTitle = req.headers.title;
		const ongId = req.headers.authorization;
		const incidentId = await connection('incidents').where('ong_id', ongId)
		.select('ong_id').first();
		if (incidentId.ong_id != ongId) {
			return res.send();
		}

		const incident = await connection('incidents').where('title', incidentTitle)
		.select('*');
		return res.json(incident);
	}
};