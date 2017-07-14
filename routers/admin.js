/**
 * Created by xujie1 on 2017/4/13.
 */
var express = require('express');
var Router = express.Router();
var cateModel = require('../models/cateModel').cateModel;

Router.get('/',function(req, res, next){
  res.render('admin/index');
});
Router.get('/cate/list',function(req, res, next){
  cateModel.find().then(function (cateList) {
    if(cateList.length > 0){
      res.render('admin/cate_list',{cateList:cateList});
    }
  }).catch(function (err) {
    console.log(err,'cateModelError')
  });
});
Router.get('/cate/add',function(req, res, next){
  res.render('admin/cate_add');
});
Router.post('/cate/add',function(req, res, next){
  var cateName = req.body.category_name;
  var cateDesc = req.body.category_desc;
  console.log(cateName,cateDesc,'xujie')
  var cate = new cateModel({
    cateName:cateName,
    cateDesc:cateDesc
  });
  cate.save().then(function(){
    console.log('cate 保存成功')
  })
});
Router.get('/blog/list',function(req, res, next){
  res.render('admin/blog_list');
});
Router.get('/blog/add',function(req, res, next){
  res.render('admin/blog_add');
});
exports.Router = Router;