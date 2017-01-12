var path = require('path');
var containerPath = path.resolve('./');

var alias = {
  'babel-polyfill': path.resolve(containerPath, './node_modules/babel-polyfill/dist/polyfill.js'),

  constants:  path.resolve(containerPath, './src/constants'),
  actions:  path.resolve(containerPath, './src/actions'),
  commonComponents:  path.resolve(containerPath, './src/components'),
  reducers:  path.resolve(containerPath, './src/reducers'),
  utils:  path.resolve(containerPath, './src/utils'),
  routers:  path.resolve(containerPath, './src/routers'),
  store:  path.resolve(containerPath, './src/store')
};

module.exports = alias;
