module.exports = function(options) {

    async function start(dependencies) {
        return {
            server: {
                port: 3000
            },
            app: {
                etag: true
            },
            middleware: {
                helmet: {
                    frameguard: false
                }
            }
        }
    }

    return {
        start: start
    }
}