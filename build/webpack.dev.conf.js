var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var SwigWebpackPlugin = require('swig-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
var devPlugins = [
    new ProgressBarPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.js",
        chunks: ["index"]
    }),
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:8].css')),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
var conf = {
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    chunksSortMode: 'dependency',
    chunks: ['vendor', 'index']
}
devPlugins.push(new HtmlWebpackPlugin(conf));

module.exports = merge(baseWebpackConfig, {
    // eval-source-map is faster for development
    //devtool: '#eval-source-map',
    plugins: devPlugins
})
