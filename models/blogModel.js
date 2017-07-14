/**
 * Created by xujie1 on 2017/7/14.
 */
var mongoose = require('mongoose');
var blogSchema = require('../schemas/blogSchema').blogSchema;
var blogModel = mongoose.model('Blog',blogSchema);

exports.blogModel = blogModel;