// import
var express = require('express');
var router = express.Router();
var path = require('path');
var glob = require('glob');

// 自动加载控制器
var ignoreFiles = ['index.js'];	// 忽略的文件
var rootFiles = ['/home'];		// 根路由文件
glob(path.join(__dirname, '/**.js'), function (err, files) {
	files.forEach(function (file) {
		// 忽略文件
		if (ignoreFiles.some(fileName => file.indexOf(fileName) >= 0)) return;
		// 获取子路由文件
		var subRoute = file.split('routes').pop().replace('.js', '');
		if(rootFiles.indexOf(subRoute) >= 0) subRoute = '/';
		// 设置子路由
		router.use(subRoute, require(file));
	});
});

// export
module.exports = router;