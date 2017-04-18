var path = require('path');
var webpack = require('webpack');
var getEntry = require('./getEntry.js');
var alias = require('../plugin_alias.js');
var containerPath = path.resolve('./');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [];
const plugins = [];
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//定义入口变量
// 获取所有js入口
var entry = getEntry('./src/*.jsx')


// 获取所有页面
var pages = getEntry('./src/*.pug');
plugins.push(new ExtractTextPlugin({
  filename: '[name].css',
  allChunks: true,
}));
plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
}));
plugins.push(new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  mangle: {
    compress: {
      warnings: true
    }
  }
}));
plugins.push(new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: require('../dist/vendor-manifest.json')
}));

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
    hash: true
  }
  plugins.push(new HtmlWebpackPlugin(conf));
}

//基本配置
module.exports = {
  devtool: false,
  entry,
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist',
    filename: '[name].js?[hash:6]'
  },
  //配置插件
  plugins,
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
        use: 'css-loader!sass-loader'
      })
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
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
    alias,
    extensions: ['.jsx', '.js', '.css', '.scss', '.pug', '.png', '.jpg']
  },
  target: 'web'
};
