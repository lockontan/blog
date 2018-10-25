// import
var express = require('express');
var router = express.Router();
var models = require('../models');

/**
 * GET login page
 */
router.get('/', function(req, res, next) {
	res.render('login', {layout: false})
});


router.post('/session', function(req, res, next) {
	if (req.body.name == 1 && req.body.password == 1) {
		res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
		res.redirect('/');
	}
});
  
// export
module.exports = router;