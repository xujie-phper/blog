/**
 * Created by ludongdong on 2017/4/13.
 */
var express = require('express');
var Router = express.Router();

Router.get('/user',function(req,res,next){
  res.send('/admin/user');
});
exports.Router = Router;