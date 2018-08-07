const logger = require('koa-logger');
const debug = require('debug')('systemic-koa:logger-middleware');

module.exports = () => {
    function start({ app }, cb) {
        debug('Starting logger middleware');
        if (!app) {
            cb(new Error('app is required'));
        }
        app.use(logger());
        cb();
    }

    return {
        start
    };
};