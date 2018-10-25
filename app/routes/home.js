// import
var express = require('express');
var router = express.Router();
var models = require('../models');

/**
 * GET home page
 */
router.get('/', function(req, res, next) {
	models.Article.findAll().then(function (data) {
		res.render('index', {articles: data})
	}).catch(function (e) {
		console.log(222)
	});
});

// export
module.exports = router;