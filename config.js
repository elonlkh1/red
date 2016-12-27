/**
 * 配置文件: development
 * @author Eric
 */
module.exports = {
	// 服务器设置
	http_port: 7706,

	sessionSecret: 'aliAR_Secret',
	sessionCookie: {maxAge: 72 * 3600 * 1000},

	// 开启调试信息
	debug: true
};
// FILE EOF