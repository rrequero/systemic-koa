const koaBody = require('koa-body');
const debug = require('debug')('systemic-koa:body-middleware');

module.exports = () => {
	const start = ({ config, app }, cb) => {
		debug('Starting Body middleware');
		if (!app) {
			cb(new Error('app is required'));
		}
		app.use(koaBody({ ...config }));
		cb();
	};

	return {
		start,
	};
};
