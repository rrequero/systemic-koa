const helmet = require('koa-helmet');
const debug = require('debug')('systemic-koa:helmet-middleware');

module.exports = () => {
	const start = ({ config, app }, cb) => {
		debug('Starting helmet middleware');
		if (!app) {
			cb(new Error('app is required'));
		}
		app.use(helmet({ ...config }));
		cb();
	};

	return {
		start,
	};
};
