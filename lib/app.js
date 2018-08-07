const async = require('async');
const debug = require('debug')('systemic-koa:app');

module.exports = function(options = {}) {

    let config;
    const Koa = options.koa || require('koa');

    function init(dependencies, cb) {      
        config =  dependencies.config;
        cb()
    }

    function start(cb) {
        debug('Starting koa application');
        const app = new Koa();
        if (config.settings) {
            for (var key in config.settings) {
                debug('Setting %s to %s', key, config.settings[key])
                app.set(key, config.settings[key])
            }
        }
        cb(null, app)
    }

    return {
        start: async.seq(init, start)
    }
}