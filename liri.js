// use dotenv package takes what is in your .env file and puts it in process.env
require("dotenv").config();

//Axios is used to send asynchronous HTTP requests to REST endpoints and perform CRUD operations
let axios = require("axios");
//code required to import the `keys.js` file and store it in a variable.
let keys = require("./keys.js");
//fs module allows you to work with the file system on your computer for actions such as read/write.
let fs = require("fs");
//npm used for spotify api
let Spotify = require("node-spotify-api");

//declaration of user input, which is placed in 3rd element of process.argv array
let userInput = process.argv.splice(3).join(" ");
//declare the task later used in switch code
let task = process.argv[2];

// create new spotify object

// moment npm allows formatting of date time
let moment = require("moment");
let spotify = new Spotify(keys.spotify);

// switch statement where i am calling different functions which call the apis used

switch (task) {
    case "concert-this":
        bands();
        break;

    case "spotify-this-song":
        song();
        break;

    case "movie-this":
        movieQuery();
        break;

    case "do-what-it-says":
        doRandom();
        break;
}