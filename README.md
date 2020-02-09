# liri-node-app

OVERVIEW OF APPLICATION
LIRI is a Command Line Interface (CLI) application developed using Node.js.

LIRI was developed using NPMs, often referred to the "Node Package Manager". The NPMs contained in LIRI include:

moment - used to modify the date formats
Axios - in this application, uses GET http requests to retrieve data
fs - used to read data from random.txt file
node-spotify-api - A simple to use API library for the Spotify REST API
dotenv : allows is to store environment variables in a .env file
The Axios NPM is used to connect, query, and retrieve data responses using APIs from 3 specific websites: i) Bandsintown.com ii) spotify.com iii) omdbapi.com (The Open Movie Database)

The response data is then displayed using commands from the command line.

Give start-to-finish instructions on how to run the app
HOW TO USE THE APPLICATION
To run the application, open a command Terminal Under the menu options select "Terminal" => "New Terminal Window"

We are going to run one of four commands, depending upon what type output you are searching.

Your options are:

A) node liri.js concert-this <name of concert event or artist>

B) node liri.js spotify-this-song <name of song track>

C) node liri.js movie-this <title of movie>

D) node liri.js do-what-it-says

OPTION A: Search for concert events
node liri.js concert-this <name of concert event or artist>
Example command: node liri.js concert-this Taylor Swift

https://user-images.githubusercontent.com/24717213/69504999-33f9b280-0ef5-11ea-8f02-77cefc4c62fe.png

The command will query the bandsintown.com website. The response returned back from the "concert-this" CLI will return:

Name of the venue
Venue location
Date of the Event (using the format this as "MM/DD/YYYY")
OPTION B: Search for artist on spotify.com
node liri.js spotify-this-song <name of song track>
Example command: node liri.js spotify-this-song Stairway to Heaven

https://user-images.githubusercontent.com/24717213/69505058-b1252780-0ef5-11ea-81ba-3951b283f9ed.png

The command will query the spotify.com website. The response returned back from the "spotify-this-song" CLI will return:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
NOTE: If no artist name is specified, the default response will display the song "The Sign" by the artist "Ace of Base".
https://user-images.githubusercontent.com/24717213/69505121-25f86180-0ef6-11ea-93b8-99b8fd1974e6.png

OPTION C: Search for movie title using OMDBAPI
node liri.js movie-this <title of movie>
Example command: node liri.js movie-this school of rock

(https://user-images.githubusercontent.com/24717213/69504804-e9c40180-0ef3-11ea-876f-53b59707c7ca.png

The response returned back from the "movie-this" CLI will return:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
NOTE: If the user does NOT include a movie name in the command, the CLI will output data for the movie 'Mr. Nobody.'
https://user-images.githubusercontent.com/24717213/69504909-a0c07d00-0ef4-11ea-8596-102fe5bc0d10.png

OPTION D: Read text from a text file using fs NPM
node liri.js do-what-it-says
https://user-images.githubusercontent.com/24717213/69505408-cef38c00-0ef7-11ea-9b03-eae1fd18bf3e.png

There are no extra parameters needed to use the "do-what-it-says" command. LIRI will read the text inside of random.txt and then use it to call one of LIRI's commands.

ie) content of random.txt: spotify-this-song,"I Want it That Way"