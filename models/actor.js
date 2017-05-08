var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

// thoughts: add movie id?
var ActorSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Actor', ActorSchema);