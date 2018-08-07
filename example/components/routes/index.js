const Systemic = require('systemic');
const exampleRoutes = require('./example-routes');

module.exports = () => Systemic()
  .add('routes', exampleRoutes()).dependsOn('app');