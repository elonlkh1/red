// 惠眼 web server
const config		= require('./config');
const express		= require('express');
const bodyParser	= require('body-parser');
const session		= require('express-session');
const app = express();

// 设置模板使用EJS,默认放在views文件夹下
app.set('view engine', 'ejs');
// 取消显示x-powered-by
app.disable('x-powered-by');
// 禁用etag
// app.disable('etag');

// 使用bodyParse中间件接收post参数
app.use(bodyParser.json({limit: '3mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '3mb'}));
app.use(function(err, req, res, next) {
	if (!err) next();
	res.json({error: '数据格式错误'});
});
// session设置
app.use(session({
	secret: config.sessionSecret,
	cookie: config.sessionCookie,
	resave: true,
	saveUninitialized: true
}));

// 路由模块
const convert = require('./ulits/convert');
const convertM = require('./ulits/convertM');
const router = express.Router();
router.get('/', function(req, res) {
	res.render('index');
})
router.post('/hack', function(req, res) {
	let {mobile, img} = req.body;
	let image = new Buffer(img.replace(/data:.*;base64,/i, ''), 'base64');
	let oriImage = mobile == 1 ? convert(image) : mobile == 2 ? convertM(image) : null;
	res.json({image: oriImage});
});

app.use('/', router);

// 启动http服务
app.listen(config.http_port, function() {
	console.log('Web Server Listening At Port:', config.http_port);
});

// FILE EOF