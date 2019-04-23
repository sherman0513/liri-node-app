# liri-node-app

link to a snippet picture of how the app works:  https://github.com/sherman0513/liri-node-app/blob/master/liri.app.PNG

The way the app works:
-app takes in four different functions in the command line of the terminal.  Based on which function is called in the command line will determine what data will be returned
-the four different fucntions that can be called are  concertThis, spotfiyThisSong, movieThis, and doWhatItSays.
-below is what each function does


-Concert
node liri.js concertThis <insert artist>

This will search using the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event


-Spotify
node liri.js spotify-this-song <insert song title>

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base


Movies
node liri.js movie-this <insert movie title>

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


Do What It Says
node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run spotify-this-song for "I Want it That Way,"


