const async = require('async');
const debug = require('debug')('systemic-koa:app');

module.exports = (options = {}) => {
	let config;
	const Koa = options.koa || require('koa');

	const init = (dependencies, cb) => {
		config = dependencies.config;
		cb();
	};

	const start = cb => {
		debug('Starting koa application');
		const app = new Koa();
		if (config.settings) {
			for (var key in config.settings) {
				debug('Setting %s to %s', key, config.settings[key]);
				app.set(key, config.settings[key]);
			}
		}
		cb(null, app);
	};

	return {
		start: async.seq(init, start),
	};
};
