const Systemic = require('systemic')
const path = require('path')

module.exports = () => Systemic()
  .bootstrap(path.join(__dirname, 'components'))