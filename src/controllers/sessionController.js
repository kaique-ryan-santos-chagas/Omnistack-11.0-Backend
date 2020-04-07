const connection = require('../database/connection');

module.exports = {
	create: async (req, res) => {
		const { id } = req.body;
		const ong = await connection('ongs').where('id', id)
		.select('name').first();
		if(!ong){
			return res.status(400).json({error: 'Not found ong with this ID'});
		}

		const ongData = await connection('ongs').select('*');
		return res.json(ongData);
	}
};