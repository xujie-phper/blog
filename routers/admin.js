/**
 * Created by xujie1 on 2017/4/13.
 */
var express = require('express');
var Router = express.Router();
var cateModel = require('../models/cateModel').cateModel;
var blogModel = require('../models/blogModel').blogModel;

Router.get('/', function (req, res, next) {
  res.render('admin/index');
});
Router.get('/cate/list', function (req, res, next) {
  cateModel.find().then(function (cateList) {
    if (cateList.length > 0) {
      res.render('admin/cate_list', {cateList: cateList});
    }
  }).catch(function (err) {
    console.log(err, 'cateModelError')
  });
});
Router.get('/cate/add', function (req, res, next) {
  res.render('admin/cate_add');
});
Router.post('/cate/add', function (req, res, next) {
  var cateName = req.body.category_name;
  var cateDesc = req.body.category_desc;

  var cate = new cateModel({
    cateName: cateName,
    cateDesc: cateDesc
  });
  cate.save().then(function () {
    console.log('cate 保存成功')
  })
});
Router.get('/blog/list', function (req, res, next) {
  blogModel.find().then(function (blogList) {
    res.render('admin/blog_list', {blogList: blogList});
  });
});
Router.get('/blog/add', function (req, res, next) {
  cateModel.find().then(function (cateList) {
    if (cateList.length > 0) {
      res.render('admin/blog_add', {cateList: cateList});
    }
  }).catch(function (err) {
    console.log(err, 'cateModelError')
  });
});
Router.post('/blog/add', function (req, res, next) {
  var cateName = req.body.category_id;
  var blogTitle = req.body.blog_title;
  var blogContent = req.body.blog_content;

  var blog = new blogModel({
    cateId: cateName,
    title: blogTitle,
    content: blogContent
  });

  blog.save().then(function () {
    console.log('blog 保存成功');
  });
  res.redirect(301,'http://127.0.0.1:8080/admin/blog/list');
});
exports.Router = Router;