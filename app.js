/**
 * Created by xujie1 on 2017/4/13.
 */
var express = require('express');
var swig = require('swig');
var Router = express.Router();
var bodyParser = require('body-parser');
var Cookies = require('cookies');
var app = express();
var mongoose = require('mongoose');
//使用es6的原生promise
mongoose.Promise = global.Promise;

try{
  mongoose.connect('mongodb://localhost/blog');
  console.log('连接数据库成功');
}catch (err){
  console.log(err);
}


//设置静态文件托管，用户访问的url以/public开始，那么直接返回对应的__dirname+'./public'下的文件
app.use('/public', express.static(__dirname + '/public'));
//body-parse设置
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
  req.cookies = new Cookies(req.res);
  next();
});

//定义当前应用所使用的的模板引擎
//第一个参数：模板引擎的名称，同时也为模板引擎的后缀，第二个参数表示用于解析模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放目录，第一个参数必须是views，第二个参数是目录
app.set('views','./views');
//注册所使用的的模板引擎，第一个参数必须是view engine，第二个参数对应上面的‘html’一致
app.set('view engine','html');
//在开发过程中，取消模板缓存
swig.setDefaults({cache:false});

var adminRouter = require('./routers/admin').Router;
var apiRouter = require('./routers/api').Router;
var mainRouter = require('./routers/main').Router;
app.use('/admin',adminRouter);
app.use('/api',apiRouter);
app.use('/',mainRouter);

// app.get('/',function(req,res,next){
//   //res.send('<h1>这是blog系统</h1>');
//   //第一个参数表示模板文件，第二个参数表示传递过去的数据
//   res.render('index');
// });
app.listen(8080);
