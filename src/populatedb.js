/**
 * clean this up so it uses async/await & Promises
 */

const mapbox = require('mapbox');
const client = new mapbox('pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6InRuaGlaOVEifQ.82ai0Cb-CyXWnsIovjLJbA');

const request = require('request');
const fs = require('fs');
const datasource = 'https://data.sfgov.org/resource/wwmu-gmzc.json';


// get data
// var getSource = function() {
//   return new Promise((resolve, reject)=> {
//     request.get(datasource, (err, body, response)=> {
//       resolve(body.toJSON().body);
//     });
//   });
// };

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/data');


// getSource()(movies => {
// var movies = JSON.parse(movies);

// var fm = movies.slice(0,1);


var Movie = require(`${__dirname}/../models/movie`);
// Movie.remove({}, (err)=> {
//   console.log('remove', err);
// });

// Movie.findOne({ title: fm.title }, (err, doc)=>{
//   console.log(err, doc);
//   if (!err) {
//     if (!doc) {
//       var newMovie = new Movie({
//         title: fm.title
//       });

//       newMovie.save().then(function(d) {
//         console.log(d);
//       });
//     }
//   }
// });
  // // return new Promise((resolve, reject) => {
  // //   Movie.collection.insert(movies)
  // //   Movie.findOne({ title: movies[0].title }, (err, doc) =>{
  // //     console.log('film', err, doc);
  // //     try {
  // //       resolve(doc);
  // //     } catch (err) {
  // //       reject('no film');
  // //     };
  // //   });
  // // });
  // // movies.slice(0,4);

  // Movie.collection.insert(movies, onInsert);
  // function onInsert(err,docs){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('docs: ', docs.length);
  //   }
  // }
  // Movie.find({}, (err, doc)=>{
  //   console.log(err, doc);
  // });
// });
// }).then(movie => { console.log( movie ); }).catch(err => {console.log(err) });;

// getsource().then(json => {
//   var movies = json;

//   // console.log(JSON.parse(json));
//   for(var keys in movies) {
//     return new Promise((resolve, reject)=> {
//       Movie.findOne({ title: movies[keys].title }, (err, doc)=> {
//         console.log ('film', err, doc);
//           if (doc) {
//             resolve(doc);
//           } else {
//             reject('no film');
//           }
//       })
//     }).then(film=>{
//       console.log('film', film);
//     }).catch(err => { console.log(err); })
    
//   }
//     // Movie.save({
//     //   title: movie.title
//     // });
// }).catch(error => { console.log('ERR', error)});

// request.get(datasource, )
//   .on('error', (err)=>{ console.log(err) })
//   .pipe(fs.createWriteStream('movies.json'))
//   .on('finish', ()=> { console.log('done') })

// // // 
// var fs = require('fs');
// var moviesJSON = fs.readFileSync('movies.json');
// var movies = JSON.parse(moviesJSON);



// // lookup each movie location and add to object
// var getLocation = async function(movie, cb) {
//   var m = movie;

//   // settimeout
//   setTimeout(()=> {
//     if (movie.hasOwnProperty('locations') && typeof movie.locations == 'string') {
//       await client.geocodeForward(movie.locations, {
//         "bbox": [
//           -122.517909004229,
//           37.6041399900046,
//           -122.354997990413,
//           37.8324400092519
//         ],
//       }, (err, data, response)=>{ 
//         // add missing locations to another array to analyze
//         if (data.features.length) { 
//           m.geometry = data.features[0].geometry;
//         }
//         cb(null, m);
//       });
//     }

//   }, 100);
// };


// var saveMovies = async function() {
//   var moviesMissing = [];
//   var moviesWithLocation = [];
//   return new Promise((resolve, reject)=>{
//     movies.forEach((movie)=> {
//       getLocation(movie, function(err, movieForProcessing) {
//         if (!movieForProcessing.hasOwnProperty('geometry')) {
//           moviesMissing.push(movieForProcessing);
//         };
//         moviesWithLocation.push(movieForProcessing);
//       });
//     });
//   });
  
// };

// setTimeout(()=> {
//   fs.writeFile('missing.json', JSON.stringify(moviesMissing), (err)=> {
//     if (err) throw err;
//     console.log('done')
//   });

//   fs.writeFile('moviesfinal.json', JSON.stringify(moviesWithLocation), (err)=> {
//     if (err) throw err;
//     console.log('done');
//   });
// }, 8000)