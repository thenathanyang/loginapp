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

// // Register
// router.get('/register', ensureAuthenticated, function(req, res){
// 	res.render('register');
// });

// // Login
// router.get('/login', ensureAuthenticated, function(req, res){
// 	res.render('login');
// });

module.exports = router;
