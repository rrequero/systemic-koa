const async = require('async');
const once = require('lodash.once');
const duration = require('parse-duration');
const enableDestroy = require('server-destroy');
const debug = require('debug')('systemic-koa:server');

module.exports = function() {

    let config;
    let app;
    let logger;
    let server;
    let destroy;

    function init(dependencies, cb) {
        config = Object.assign({ host: '0.0.0.0', shutdown: { delay: '5s' } }, dependencies.config);
        app = dependencies.app;
        logger = dependencies.logger || console;
        cb();
    }

    function validate(cb) {
        if (!app) {
            return cb(new Error('app is required'));
        }
        if (!config.port) {
            return cb(new Error('config.port is required'));
        }
        cb();
    }

    function start(cb) {
        debug('Starting koa server');
        logger.info(`Starting server on ${config.host}:${config.port}`);
        server = app.listen(config.port, config.host, cb);
        enableDestroy(server)
    }

    function stop(cb) {
        if (!server) {
            return cb();
        }
        var next = once(cb);
        scheduleDestroy(next);
        close(next);
    }

    function scheduleDestroy(cb) {
        destroy = setTimeout(_ => {
            logger.info(`Server did not shutdown gracefully within ${config.shutdown.delay}`);
            logger.warn(`Forcefully stopping server on ${config.host}:${config.port}`);
            server.destroy(cb);
        }, duration(config.shutdown.delay))
        destroy.unref();
    }

    function close(cb) {
        logger.info(`Stopping server on ${config.host}:${config.port}`);
        server.close(_ => {
            clearTimeout(destroy);
            cb();
        });
    }

    return {
        start: async.seq(init, validate, start),
        stop: stop
    }
}