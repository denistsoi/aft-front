/**
 * module dependencies
 * angular sample
 */
const webpack = require('webpack');
const globby = require('globby');
const debug = require('debug')('pack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// use path
const outputDir = `${__dirname}/dist`;
const sourceDir = 'src';

/**
 * append files in source directory to webpackentry
 */

let webpackentry = {
  bundle: './src/index.js',
  vendor: [
    'mapbox-gl',
    'supercluster',
  ]
}

/**
 * webpack template based from denistsoi/dt-maps
 */

const config = {
  entry: webpackentry,
  output: {
    path: outputDir,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ],
  resolve: {
    alias: {
      "Utils": path.resolve(__dirname, 'src/utils/')
    }
  },
};

module.exports = config;