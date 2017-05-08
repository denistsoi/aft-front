var mapbox = require('mapbox');
var client = new mapbox('pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6InRuaGlaOVEifQ.82ai0Cb-CyXWnsIovjLJbA');

// var request = require('request');
// var fs = require('fs');
// const datasource = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

// // get data
// request.get(datasource)
//   .on('error', (err)=>{ console.log(err) })
//   .pipe(fs.createWriteStream('movies.json'))
//   .on('finish', ()=> { console.log('done') })

// // 
var fs = require('fs');
var moviesJSON = fs.readFileSync('movies.json');
var movies = JSON.parse(moviesJSON);

// lookup each movie location and add to object
var getLocation = function(movie, cb) {
  var m = movie;

  // settimeout
  setTimeout(()=> {
    if (movie.hasOwnProperty('locations') && typeof movie.locations == 'string') {
      client.geocodeForward(movie.locations, {
        "bbox": [
          -122.517909004229,
          37.6041399900046,
          -122.354997990413,
          37.8324400092519
        ],
      }, (err, data, response)=>{ 
        // add missing locations to another array to analyze
        if (data.features.length) { 
          m.geometry = data.features[0].geometry;
        }
        cb(null, m);
      });
    }

  }, 100);
};


var saveMovies = async function() {
  var moviesMissing = [];
  var moviesWithLocation = [];
  return new Promise((resolve, reject)=>{
    movies.forEach((movie)=> {
      getLocation(movie, function(err, movieForProcessing) {
        if (!movieForProcessing.hasOwnProperty('geometry')) {
          moviesMissing.push(movieForProcessing);
        };
        moviesWithLocation.push(movieForProcessing);
      });
    });
  });
  
};

setTimeout(()=> {
  fs.writeFile('missing.json', JSON.stringify(moviesMissing), (err)=> {
    if (err) throw err;
    console.log('done')
  });

  fs.writeFile('moviesfinal.json', JSON.stringify(moviesWithLocation), (err)=> {
    if (err) throw err;
    console.log('done');
  });
}, 8000)



// var mass = [];

// movies.forEach((m) => {
//   client.geocodeForward(m.locations.toString(), (err, data, response) => {
//     if (err) console.log(err);
//     m.geomertry = data.features[0].geometry;
//   })
// })
  


// console.log(movies.length, typeof movies);

// function write(buff, enc, next) {
//   console.log(buff.toString());
//   next();
// };

// function end(done) {
//   done();
// }

// movies.pipe(through(write, end));
// movies.pipe(through(write, end) {

// }).pipe(fs.createWriteStream('finished.json'));
  
  // fs.writeFile('movies.json', body);

// client.geocodeForward('Hooker Alley Garden San Francisco USA', (err, data, res)=>{
//   if (err) console.log('err', err);
//   console.log(data);
//   // console.log('data is ', data);

//   var features = data.features;
//   console.log(JSON.stringify(features[0]));

//   // console.log( err, data, res);
// })