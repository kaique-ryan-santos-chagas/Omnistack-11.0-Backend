const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
	index: async (req, res) => {
		const ongs = await connection('ongs').select('*');
		return res.json(ongs);
	},
	
	create: async (req, res) => {
		const {name, email, whatsapp, city, uf} = req.body;
		const id = crypto.randomBytes(4).toString('HEX');
		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city, 
			uf
		});
		return res.json({ id });
	},

	delete: async (req, res) => {
		const { ongName } = req.params;
		const ong_id = req.headers.authorization;
		const ong = await connection('ongs').where('name', ongName).select('id').first();
		if(ong.id != ong_id){
			return res.status(401).json({error: 'Operation is not permitted'});
		}

		await connection('ongs').where('id', ong_id).delete();
		return res.status(204).send();
		
	},

	searchOng: async (req, res) => {
		const nameOng = req.headers.name;
		const search = await connection('ongs').where('name', nameOng).select('*');
		return res.json(search);
	}

};