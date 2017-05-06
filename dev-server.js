/**
 * Development Server
 */

const express = require('express');
const port    = process.env.PORT || 3000;
const debug   = require('debug')('pack');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

// development server
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

const app = express();

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/dist`));

app.listen(port, ()=>{
  debug('server is listening to port: ', port);
});