/**
 * Created by ludongdong on 2017/4/14.
 */
var  loginBtn = $('loginDiv');
var  registerBtn = $('registerDiv');
$('#loginBtn').click = function(){
  registerBtn.hide();
  loginBtn.show();
};
$('#registerBtn').click = function(){
  loginBtn.hide();
  registerBtn.show();
};