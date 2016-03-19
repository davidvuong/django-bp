'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function () {
  var config = {};

  config.entry = {
    app: './src/app/app.js'
  };

  config.output = {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };
  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  };

  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  config.plugins = [];
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css')
  );

  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
}();
