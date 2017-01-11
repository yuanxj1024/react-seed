var webpack = require('webpack');
var path = require('path');
var getEntry = require('./getEntry.js');
var complie = require('./complie.js');
var alias = require('../plugin_alias.js');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var containerPath = path.resolve('./');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].css');

// 读取系统配置
var globalConfig = require('../global.config.json');
globalConfig = complie(globalConfig);

// 获取所有js入口
var entrys = getEntry('./src/entry/*/*.jsx');
// 获取所有页面
var pages = getEntry('./src/entry/*/*.pug');

// webpack处理的插件
var plugins = [];
plugins.push(extractSASS);
// HMR 模块
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new OpenBrowserPlugin({
  url: 'http://localhost:9010'
}));

// 处理pug页面
for (var chunkname in pages) {
  var conf = {
    filename: chunkname + '.html',
    template: pages[chunkname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: false
    },
    chunks: [chunkname],
    hash: true,
    globalConfig: globalConfig
  }
  plugins.push(new HtmlWebpackPlugin(conf));
}

function getFileName(name) {
  var arr = name.split('\/');
  return arr[arr.length - 1] + '.js';
}

/**
 * 配置webpack
 */
var config = {
  entry: entrys,
  output: {
    path: path.resolve(containerPath, './www/'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.(jsx|js)$/,
      loaders: ['babel-loader', 'eslint'],
      exclude: /(node_modules)|(plugins)/
    }],
    loaders: [{
      test: /\.html$/,
      loader: 'raw',
      exclude: /(node_modules)|(plugins)/
    }, {
      test: /\.scss$/,
      loader: extractSASS.extract(['css', 'sass']),
      exclude: /(node_modules)|(plugins)/
    }, {
      test: /\.css$/,
      loader: extractSASS.extract(['css'])
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file',
    }, {
      test: /.pug$/,
      loader: 'pug',
      exclude: /(node_modules)|(plugins)/
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192&name=img/[name].[ext]?[hash:8]',
      exclude: /(node_modules)|(plugins)/
    }]
  },
  plugins: plugins,
  resolve: {
    alias: alias,
    extensions: ['', '.jsx', '.js', '.css', '.scss', '.pug', '.png', '.jpg']
  },
  externals: {}
};
module.exports = config;
