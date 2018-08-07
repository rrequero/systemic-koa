const async = require('async');
const cors = require('@koa/cors');
const debug = require('debug')('systemic-koa:cors-middleware');

module.exports = () => {

    
    function start({ config, app }, cb) {
        debug('Starting cors middleware');
        if (!app) {
            cb(new Error('app is required'));
        }
        app.use(cors({...config}));
        cb();
    }

    return {
        start
    };
}