// import
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');

var routes = require('./app/routes/index');

// 创建 app 实例
var app = express();

//注册ejs模板
app.engine('.ejs', require('ejs').__express);

//设置视图模板的默认后缀名为.ejs
app.set('view engine', 'ejs');

//设置模板文件文件夹
app.set('views', path.join(__dirname, 'public'));

// 添加layout支持
app.use(expressLayouts);

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '365d'
}));

// 加载路由
app.use(routes);

// 启动服务
app.listen(3000, function () {
  console.log('App started\nport:', 3000, '\nmode:', app.get('env'));
});

// export
module.exports = app;
