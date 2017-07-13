/**
 * Created by xujie1 on 2017/4/13.
 */
var express = require('express');
var Router = express.Router();
var userModel = require('../models/userModel').userModel;

Router.post('/user/register', function (req, res, next) {
  var responseData = {
    code: 0,
    message: ''
  };
  var username = req.body.username;
  var password = req.body.password;
  var repassword = req.body.repassword;
  if (!username) {
    responseData.code = 1;
    responseData.message = '用户名不能为空！';
    res.json(responseData);
    return;
  }
  if (!password) {
    responseData.code = 2;
    responseData.message = '密码不能为空！';
    res.json(responseData);
    return;
  }
  if (password !== repassword) {
    responseData.code = 3;
    responseData.message = '请确认密码！';
    res.json(responseData);
    return;
  }
  //注册成功，写入数据库
  var user = new userModel({
    username: username,
    password: password
  });

  userModel.findOne({
    username: username
  }).then(function (userInfo) {
    if (userInfo) {
      console.log(userInfo);
      responseData.code = 4;
      responseData.message = '用户已经注册';
      res.json(responseData);
      return;
    }
    return user.save();
  }).then(function (newUser) {
    responseData.message = '注册成功！';
    res.json(responseData);
  }).catch(function (err) {
    console.log(err)
  })
});
Router.post('/user/login',function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  userModel.findOne({username:username,password:password}).then(function(userInfo){
    if(userInfo){
      console.log(userInfo,'userInfo')
      //登录成功，信息写入cookie
      req.cookies.set('userInfo',userInfo);
    }else{
      res.send('<h1>用户名或密码错误</h1>');
    }
  })
});
Router.get('/user/login',function(req, res, next){
  res.render('main/login');
});
Router.get('/user/register',function(req, res, next){
  res.render('main/register');
})
Router.get('/about',function(req,res,next){
  res.render('main/about');
});
Router.get('/share',function(req,res,next){
  res.render('main/share');
});
Router.get('/news',function(req,res,next){
  res.render('main/news');
});
Router.get('/newslist',function(req,res,next){
  res.render('main/newslist');
});
Router.get('/',function(req,res){
  res.send('hello world');
});
exports.Router = Router;