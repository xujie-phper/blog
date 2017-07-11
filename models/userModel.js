/**
 * Created by xujie1 on 2017/4/14.
 */
var mongoose = require('mongoose');
var userSchema = require('../schemas/userSchema').userSchema;
var userModel = mongoose.model('User',userSchema);

exports.userModel = userModel;