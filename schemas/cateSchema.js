/**
 * Created by xujie1 on 2017/7/13.
 */
var mongoose = require('mongoose');

var cateSchema = new mongoose.Schema({
  cateName: String,
  cateDesc: String
});

exports.cateSchema = cateSchema;