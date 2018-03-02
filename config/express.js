const express = require('express');
const load = require('express-load');

const home = require('../app/routes/home');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;	
}
