/**
 * Created by xujie1 on 2017/4/13.
 */
var express = require('express');
var Router = express.Router();

Router.get('/',function(req,res,next){
  res.render('main/index');
});
exports.Router = Router;