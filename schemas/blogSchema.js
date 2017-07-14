/**
 * Created by xujie1 on 2017/7/14.
 */
var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  cateId: String,
  title: String,
  content:String
});

exports.blogSchema = blogSchema;