/**
 * Created by xujie1 on 2017/4/14.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

exports.userSchema = userSchema;