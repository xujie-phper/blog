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
  var User = new userModel();
  User.find({username:username,password:password}).then(function(userInfo){
    if(userInfo){
      //登录成功，将用户信息写入session
      req.session.set('userInfo',userInfo);
    }
  })
});
Router.get('/about',function(req,res,next){
  res.render('main/about');
});
exports.Router = Router;