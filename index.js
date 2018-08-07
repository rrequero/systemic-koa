module.exports = {
    server: require('./lib/server'),
    app: require('./lib/app'),
    loggerMiddleware: require('./lib/logger-middleware'),
    helmetMiddleware: require('./lib/helmet-middleware'),
    bodyMiddleware: require('./lib/body-middleware'),
    corsMiddleware: require('./lib/cors-middleware')
}