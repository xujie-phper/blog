/**
 * Created by ludongdong on 2017/4/14.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var userSchema = new mongoose.Schema({
  username: String,
  password: String
});
exports.userSchema = userSchema;