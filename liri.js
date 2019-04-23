require("dotenv").config();

// reference week 6 for api links for bands in town and omdb
// reference class examples and activities to make lire.app
// after looking through homework bank.js will be useful: similar as in need to use switch and case part of activity for liri because the app needs to take in different commands
// reference other activities to know what let/const to create
// in reference to bank ex. liri app will should have 4 functions? one for each of the different commands based on hw instructions...?
// functions should be relatively the same just need to solve one and rest should follow(will need let/const added as well)

// ---focus on using let and const instead of var---
// if applicable keep using forEach and .map, .filter, .reduce
// also arrow functions

const fs = require('fs');

const moment = require('moment');

const keys = require('./keys.js');

const Spotify = require('node-spotify-api');

const axios = require('axios');

let command = process.argv[2];
let search = process.argv.slice(3).join('+');

switch (command) {
    case 'concertThis':
        concertThis();
        break;

    case 'spotifyThisSong':
        spotifyThisSong();
        break;

    case 'movieThis':
        movieThis();
        break;

    case 'doWhatItSays':
        doWhatItSays();
        break;

};

function concertThis() {

    let artist = search;

    let queryUrl = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';
    console.log(queryUrl);


    // need to create a loop to loop through all the responses
    axios.get(queryUrl).then(function(response) {
        //if (error) console.log(error);
        console.log("json ", JSON.stringify(response.data[0], null, 2));
        let obj = response.data[0];
        let artist = obj.lineup;
        let venue = obj.venue.name;
        let location = obj.venue.city;
        let state = obj.venue.region;
        let time = moment(obj.datetime).format('dddd, MMM Do YYYY')


        console.log("Artist: " + artist);
        console.log("Venue: " + venue);
        console.log("City: " + location);
        console.log("State: " + state);
        console.log("Time: " + time);

    })
};



// what is needed to retrieve from spotify
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
function spotifyThisSong() {

    let spotify = new Spotify(keys.spotify);
       
      spotify
        .search({ type: 'track', query: search })
        .then(function(data) {
        //   console.log(data);

          let artist = data.tracks.items[0].album.artists[0].name;
          let preview = data.tracks.items[0].preview_url;
          let song = data.tracks.items[0].name;
          let album = data.tracks.items[0].album.name;
  
          console.log('Artist: ' + JSON.stringify(artist, null, 2));
          console.log('Song: ' + JSON.stringify(song, null, 2));
          console.log('Album: ' + JSON.stringify(album, null, 2));
          console.log('Preview: ' + JSON.stringify(preview, null, 2));


        })
        .catch(function(err) {
          console.log(err);
        });


};



function movieThis() {

    let movieName = search;

    let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    axios.get(queryUrl).then(function (response) {
        console.log('Movie title: ' + response.data.Title);
        console.log('Movie release year: ' + response.data.Year);
        console.log('Movie imdbRating: ' + response.data.imdbRating);
        console.log('Movie rating: ' + response.data.Ratings[0].Value);
        console.log('Movie country: ' + response.data.Country);
        console.log('Movie language: ' + response.data.Language);
        console.log('Movie plot: ' + response.data.Plot);
        console.log('Movie actors: ' + response.data.Actors);
    })

};



function doWhatItSays() {

    fs.readFile('random.txt', 'utf8', function(error, data) {
        if (error) {
            return console.log(error);
        };

        console.log(data);

        let dataArr = data.split(',');

        console.log(dataArr);
    })

};

