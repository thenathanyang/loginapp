var express = require('express');
var router = express.Router();

// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

// Register User
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// console.log('name'); 	// Check to see if name is recieved

	// Validations
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors)
	{
		res.render('register', {		// why just 'register' instead of 'users/register'?
			errors:errors
		});
	}
	else
	{
		console.log('PASSED');
	}
});

module.exports = router;


// // Register
// router.get('/register', ensureAuthenticated, function(req, res){
// 	res.render('register');
// });

// // Login
// router.get('/login', ensureAuthenticated, function(req, res){
// 	res.render('login');
// });