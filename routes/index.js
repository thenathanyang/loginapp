var express = require('express');
var router = express.Router();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var junk = require('junk');


// Get Homepage
router.get('/', ensureAuthenticated, function(req, res) {

	var fileNames = fs.readdirSync('./public/uploads').filter(junk.not);			// '../public/uploads'?
	
	res.render('index', {
		fileNames: fileNames,
	});
});


function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	else {
		// req.flash('error_msg', 'You are not logged in'); 		// If trying to access Dashboard but not logged in, redirected to login screen 
		res.redirect('users/login');
	}
}

// router.post("*", function(req, res) {
// 	res.end(JSON.stringify(req.files) + "\n")
// });

router.post('/upload', function(req, res) {

	// create an incoming form object
	var form = new formidable.IncomingForm();

	// specify that we want to allow the user to upload multiple files in a single request
	form.multiples = true;

	// store all uploads in the /uploads directory
	form.uploadDir = path.join(__dirname, '../public/uploads');

	// every time a file has been uploaded successfully,
	// rename it to it's orignal name
	form.on('file', function(field, file) {
		fs.rename(file.path, path.join(form.uploadDir, file.name));
	});

	// log any errors that occur
	form.on('error', function(err) {
		console.log('An error has occured: \n' + err);
	});

	// once all the files have been uploaded, send a response to the client
	form.on('end', function() {
	res.end('success');
	});

	// parse the incoming request containing the form data
	form.parse(req);

});


module.exports = router;
