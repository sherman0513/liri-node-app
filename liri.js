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


let axios = require('axios');

let command = process.argv[2];
let search = process.argv.slice(3).join(' ');

switch (command) {
    case 'concer':
    concert();
    break;

    case 'spotify':
    spotify();
    break;

    case 'movie':
    movie();
    break;

    case 'doWhatItSays':
    doWhatItSays();
    break;
};


// once i get the function working try creating it with an arrow function for practice
// 
// 
// 
// 

function concert() {

};



function spotify() {

};



function movie() {

};



function doWhatItSays() {
    
};

