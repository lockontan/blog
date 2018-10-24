// import
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

// 实例化 sequelize
var sequelize = new Sequelize('home', 'root', '123456', {
	host: '127.0.0.1',
	dialect: 'mysql',
	// 不使用sequelize的运算符
	operatorsAliases: false,
	pool: {
		max: 50, //config.mysql.poolSize,
		min: 0,
		idle: 10000
	},
	// 不打印查询日志
	logging: false
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// 模型列表
var models = {};
var ignore = ['index.js'];

// 初始化模型
fs.readdirSync(__dirname).filter(function(file) {
	return (file.indexOf('.') !== 0) && (ignore.indexOf(file) < 0);
}).forEach(function(file) {
	var model = sequelize.import(path.join(__dirname, file));
	models[model.name] = model;
});

// 关联模型关系
Object.keys(models).forEach(function(modelName) {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

// export
module.exports = models;
