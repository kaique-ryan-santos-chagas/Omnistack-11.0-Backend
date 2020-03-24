const express = require('express');


const app = express();

app.get('/', (req, res) => {
	res.send('Hello Omnistack 11');
});



app.listen(3333);