// check if location exists
require('dotenv').load();

var mapbox = require('mapbox');
var client = new mapbox(process.env.MAPBOX_API_KEY);

const SFBounds = [
  -122.517909004229,
  37.6041399900046,
  -122.354997990413,
  37.8324400092519
];

function testLocation(address) {
  if (!address) {
    address = 'The Ramp Restaurant';
  }
  client.geocodeForward(address, {
    "bbox": SFBounds,
  }, (err, data, res)=>{
    if (err) console.log('err', err);
    console.log(data);
  });
}

exports = module.exports = testLocation();