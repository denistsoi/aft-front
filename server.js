require('dotenv').load();

var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var debug = require('debug');

var app = express();

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

/**
 * connect to db
 */
// var opendbConnection = function(callback) {
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', (cb)=> {
    // find if db has collection movies
  console.log('connected to');

  mongoose.connection.db.listCollections({name: 'movies'}).next((err, collinfo)=>{
    if (err) throw new Error('Error', err);
    if(!collinfo) {
      // movies collection is empty
      console.log('movies collection is empty... starting worker');
      // go do some work...
      
    }
  });
});
// }


app.use(express.static(`${__dirname}/public`));

app.post('/search', (req, res) => {
  var query = req.query;
  // go fetch movie locations based on query
  // could be movie name, fuzzy search, actor , director or location. 

  // send json response
    res.json()
});

app.listen(port, ()=>{
  console.log('server is listening to port: ', port);
});