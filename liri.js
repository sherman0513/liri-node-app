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

const spotify = require('node-spotify-api');

const keys = require('./keys.js');

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


// once i get the function working try creating it with an arrow function for practice

function concertThis() {

    let artist = search;

    let queryUrl = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';
    console.log(queryUrl);

    axios.get(queryUrl).then(function(response) {
        console.log('Concert info: ' + response.venue.name)
        console.log('Concert info: ' + response.venue.city)
        // need to find path to retrieve name of venue, venue location, and date of event
    })
};



function spotifyThisSong() {

    spotify.search({
        type: 'track',
        query: search,
    }), function(error, data) {
        if (error) {
            return console.log('What is this thing an error' + error)
        }

        let song = data.tracks.item[i];
        let artist = songInfo.artists[0].name;
        let preview = data.tracks.item[0].preview_url;
        let album = data.tracks.item[0].album.name;

        console.log('Song: ' + song);
        console.log('Artist: ' + artist);
        console.log('Album: ' + album);
        console.log('Preview: ' + preview);

    }
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

