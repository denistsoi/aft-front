var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Movie', MovieSchema);