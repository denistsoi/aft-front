require('dotenv').load();

var express = require('express');
// var mongo = require('mongodb').Client;
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var debug = require('debug');

var app = express();

// const URL_DB = process.env.MONGO_URL;
// const datasource = 'https://data.sfgov.org/resource/wwmu-gmzc.json';


mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

/**
 * connect to db
 */
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', ()=> {
  // find if db has collection movies
  console.log('connected');
});

app.use(express.static(`${__dirname}/public`));

app.post('/search', (req, res) => {
  var query = req.query;
  // go fetch movie locations based on query
  // could be movie name, fuzzy search, actor , director or location. 

  // send json response
    res.json()
});

app.listen(port, ()=>{
  debug('server is listening to port: ', port);
});