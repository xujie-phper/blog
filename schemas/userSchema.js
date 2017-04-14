/**
 * Created by ludongdong on 2017/4/14.
 */
var mongoose = require('mongoose');
//使用es6的原生promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/xujie');
var userSchema = new mongoose.Schema({
  username: String,
  password: String
});
exports.userSchema = userSchema;