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

	// Revisar o código (não está funcionando)
	delete: async (req, res) => {
		const idOng = req.body;
		const ongDel = await connection('ongs').where('id', idOng).del();
		return res.send('Account deleted');
		
	}

};