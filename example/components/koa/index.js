const Systemic = require('systemic');
const { server, app, loggerMiddleware, helmetMiddleware, bodyMiddleware, corsMiddleware } = require('../../..');

module.exports = () =>
	Systemic()
		.add('app', app())
		.dependsOn('config')
		.add('middleware.cors', corsMiddleware())
		.dependsOn('config', 'app')
		.add('middleware.logger', loggerMiddleware())
		.dependsOn('config', 'app')
		.add('middleware.helmet', helmetMiddleware())
		.dependsOn('config', 'app')
		.add('middleware.body', bodyMiddleware())
		.dependsOn('config', 'app')
		.add('server', server())
		.dependsOn('config', 'app');
