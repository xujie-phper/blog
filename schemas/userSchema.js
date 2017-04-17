/**
 * Created by ludongdong on 2017/4/14.
 */
var mongoose = require('mongoose');
//使用es6的原生promise
mongoose.Promise = global.Promise;

try{
  mongoose.connect('mongodb://localhost/xujie')
  console.log('连接数据库成功');
}catch (err){
  console.log(err);
}

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});
exports.userSchema = userSchema;