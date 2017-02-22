var path = require('path')
var config = require('../config')
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        index: ['./src/index.js'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'scss', 'css']
    },
    module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
          },
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true
                // see below for possible options
            }
          }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }, 
        {
            test: /\.css$/,
            // loader: "style-loader!css-loader?root=."
            loader: ExtractTextPlugin.extract("style", "css", "postcss")
        }, 
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", 'css!sass')
        }, 
        {
            test: /\.(png|jpe?g|gif|svg|cur)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 30000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 30000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    eslint: {
      configFile: './.eslintrc'
    }
}
