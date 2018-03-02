module.exports = function (app) {
	const controller = app.controllers.home;
	app.get('/', controller.index);
	// app.get('/index', controller.index);
}