var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res)
{
	res.render('index');
});

function ensureAuthenticated(req, res, next)
{
	if (req.isAuthenticated())
	{
		return next();
	}
	else
	{
		// req.flash('error_msg', 'You are not logged in'); 		// If trying to access Dashboard but not logged in, redirected to login screen 
		res.redirect('users/login');
	}
}

module.exports = router;
