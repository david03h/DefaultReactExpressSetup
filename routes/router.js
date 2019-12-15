module.exports = function(app) {
	app.get('/helloworld1', (req,res) => {

		res.render('base');
	});

	app.get('/helloworld2', (req, res) => {
		
		res.render('base');
	});

	app.get('*', (req, res) => {
		
		res.redirect('helloworld1');
	});	
};
