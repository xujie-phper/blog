var swig = require('swig');
//定义当前应用所使用的的模板引擎
//第一个参数：模板引擎的名称，同时也为模板引擎的后缀，第二个参数表示用于解析模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放目录，第一个参数必须是views，第二个参数是目录
app.set('views','./views');
//注册所使用的的模板引擎，第一个参数必须是view engine，第二个参数对应上面的‘html’一致
app.set('view engine','html');
//在开发过程中，取消模板缓存
swig.setDefaults({cache:false});
++++++++++++++++++++++++++++++++++++++++++++++++++
//使用es6的原生promise
mongoose.Promise = global.Promise;