const Systemic = require('systemic');
const Config = require('./config');

module.exports = () => Systemic()
    .add('config', Config(), { scoped: true });