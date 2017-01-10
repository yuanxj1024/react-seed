var path = require('path');
var containerPath = path.resolve('./');

var alias = {
  tip: path.resolve(containerPath, './src/custom_plugins/tip'),
  "babel-polyfill": path.resolve(containerPath, './node_modules/babel-polyfill/dist/polyfill.js')
};

module.exports = alias;
