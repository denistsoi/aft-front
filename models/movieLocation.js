var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MovieLocationSchema = new mongoose.Schema({
  movie_id: {
    type: ObjectId,
    ref: 'Movie',
    require: true
  },
  location: {
    type: String,
    require: true
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  }
});

module.exports = mongoose.model('MovieLocation', MovieLocationSchema);