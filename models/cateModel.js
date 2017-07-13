/**
 * Created by xujie1 on 2017/7/13.
 */
var mongoose = require('mongoose');
var cateSchema = require('../schemas/cateSchema').cateSchema;
var cateModel = mongoose.model('Category',cateSchema);

exports.cateModel = cateModel;