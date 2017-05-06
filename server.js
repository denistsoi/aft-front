var express = require('express');
// var mongo = require('mongodb').Client;
var mongoose = require('mongoose');

var app = express();

// const URL_DB = process.env.MONGO_URL;
// const datasource = 'https://data.sfgov.org/resource/wwmu-gmzc.json';


mongoose.connect(process.env.MONGODB_URL);
var connection