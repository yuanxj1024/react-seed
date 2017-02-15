var path = require('path');
var webpack = require('webpack');
var getEntry = require('./getEntry.js');
var complie = require('./complie.js');
var containerPath = path.resolve('./');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var babelpolyfill = require("babel-polyfill");

const loaders = [];
const plugins = [];
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 读取系统配置
var globalConfig = require('../global.config.json');

//定义入口变量
// 获取所有js入口
var entry = getEntry('./src/entry/*/*.jsx')


// 获取所有页面
var pages = getEntry('./src/entry/*/*.pug');
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new OpenBrowserPlugin({
  url: 'http://localhost:9010'
}));
plugins.push(new ExtractTextPlugin('[name].css'));

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

//基本配置
module.exports = {
    devtool: 'source-map',
    entry,
    //配置插件
    plugins,
    output: {
      path: path.resolve('./www/'),
      filename: '[name].js',
      sourceMapFilename: '[name].map'
    },
    module: {
      rules: [{
        test: /\.(jsx|js)$/,
        use: ['babel-loader'],
        exclude: /(node_modules)|(plugins)/
      }, {
        enforce: 'pre',
        test: /\.(jsx|js)$/,
        use: ['eslint-loader'],
        exclude: /(node_modules)|(plugins)/
      }, {
        test: /\.html$/,
        use: ['raw-loader'],
        exclude: /(node_modules)|(plugins)/
      }, {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use:'css-loader!sass-loader'
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use:'css-loader'
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader'],
      }, {
        test: /.pug$/,
        use: ['pug-loader'],
        exclude: /(node_modules)|(plugins)/
      }, {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=8192&name=img/[name].[ext]?[hash:8]'],
        exclude: /(node_modules)|(plugins)/
      }]
    },
    externals: {},
    resolve: {
      alias: {
        constants: path.resolve(containerPath, './src/constants'),
        actions: path.resolve(containerPath, './src/actions'),
        commonComponents: path.resolve(containerPath, './src/components'),
        reducers: path.resolve(containerPath, './src/reducers'),
        utils: path.resolve(containerPath, './src/utils'),
        routers: path.resolve(containerPath, './src/routers'),
        store: path.resolve(containerPath, './src/store')
      },
      extensions: ['.jsx', '.js', '.css', '.scss', '.pug', '.png', '.jpg']
    },
    target: 'web'
  };
