# systemic-koa

A [systemic](https://github.com/guidesmiths/systemic) koa component

## Usage

```js
const System = require('systemic');
const { server, app } = require('systemic-koa').server;
const routes = require('./lib/routes');

new System()
	.configure({
		server: {
			port: 3000,
		},
	})
	.add('app', app())
	.dependsOn('config')
	.add('routes', routes())
	.dependsOn('app')
	.add('server', server())
	.dependsOn('config', 'app', 'middleware.default')
	.start((err, components) => {
		// Do stuff with components
	});
```

Available example: [here](https://github.com/rrequero/systemic-koa/tree/master/example)

## Available middlewares

### Koa Body middleware

Documentation: [koa-body](https://github.com/dlau/koa-body#koa-body--)

Usage:

```js
const { bodyMiddleware } = require('systemic-koa');

new System()
	.configure({
		server: {
			port: 3000,
		},
		middleware: {
			body: {
				// configuration
			},
		},
	})
	.add('app', app())
	.dependsOn('config')
	.add('middleware.body', bodyMiddleware())
	.dependsOn('config', 'app')
	.add('routes', routes())
	.dependsOn('app')
	.add('server', server())
	.dependsOn('config', 'app', 'middleware.default')
	.start((err, components) => {
		// Do stuff with components
	});
```

### Helmet middleware

Documentation: [koa-helmet](https://github.com/venables/koa-helmet#readme)

Usage:

```js
const { helmetMiddleware } = require('systemic-koa');

new System()
	.configure({
		server: {
			port: 3000,
		},
		middleware: {
			helmet: {
				// configuration
			},
		},
	})
	.add('app', app())
	.dependsOn('config')
	.add('middleware.helmet', helmetMiddleware())
	.dependsOn('config', 'app')
	.add('routes', routes())
	.dependsOn('app')
	.add('server', server())
	.dependsOn('config', 'app', 'middleware.default')
	.start((err, components) => {
		// Do stuff with components
	});
```

### Cors middleware

Documentation: [koa-cors](https://github.com/koajs/cors#koacors)

Usage:

```js
const { corsMiddleware } = require('systemic-koa');

new System()
	.configure({
		server: {
			port: 3000,
		},
		middleware: {
			cors: {
				// configuration
			},
		},
	})
	.add('app', app())
	.dependsOn('config')
	.add('middleware.cors', corsMiddleware())
	.dependsOn('config', 'app')
	.add('routes', routes())
	.dependsOn('app')
	.add('server', server())
	.dependsOn('config', 'app', 'middleware.default')
	.start((err, components) => {
		// Do stuff with components
	});
```

### Koa logger middleware

Documentation: [koa-logger](https://github.com/koajs/logger#koa-logger)

Usage:

```js
const { loggerMiddleware } = require('systemic-koa');

new System()
	.configure({
		server: {
			port: 3000,
		},
		middleware: {},
	})
	.add('app', app())
	.dependsOn('config')
	.add('middleware.logger', loggerMiddleware())
	.dependsOn('config', 'app')
	.add('routes', routes())
	.dependsOn('app')
	.add('server', server())
	.dependsOn('config', 'app', 'middleware.default')
	.start((err, components) => {
		// Do stuff with components
	});
```

## Debugging

You can debug systemic-koa by setting the DEBUG environment variable to systemic-koa:\*.

```
DEBUG='systemic-koa:*' node index.js
```
