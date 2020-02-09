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

function bands() {

    // query url for bandintown using band entered in userInput
    let bandQuery = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

    axios.get(bandQuery).then(
        function (response) {
            // console.log(response);


            let venuesArray = response.data;
            console.log("Venue: ", response.data[0].venue.name);
            //console.log("Venue: ", JSON.stringify(response.data));
            let temp = response.data[0].datetime.split("T");

            //sent variable for datetime , and use moment to change format
            var eventDateTime = moment(response.data[0].datetime);

            console.log("Venue location: " + response.data[0].venue.city + " " + response.data[0].venue.region + ", " + response.data[0].venue.country);

            // display date time in MM/DD/YYYY format
            console.log("Event Date & Time: " + eventDateTime.format("MM/DD/YYYY"));

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// spotify code should go here for "spotify-this-song" code "
// code placed in band() function 

function song() {

    // this code was taken from example listed on https://www.npmjs.com/package/node-spotify-api

    //if the user input for spotify-this-song is blank, default to Ace of Base , "The Sign"
    if (userInput === "") {
        userInput = "The Sign ace of base";
        spotify
            .search({ type: 'track', query: userInput, limit: 1 })
            .then(function (response) {

                let spotifyResults =
                    "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[0].artists[0].name +
                    "\nSong Name: " + response.tracks.items[0].name +
                    "\nAlbum Name: " + response.tracks.items[0].album.name +
                    "\nPreview Link: " + response.tracks.items[0].preview_url;

                console.log(spotifyResults);
            })
    }
    else {

        // Display the first 5 responses for song entered in "Spotify-this-song"
        spotify
            .search({ type: 'track', query: userInput, limit: 5 })
            .then(function (response) {

                for (let i = 0; i < 5; i++) {
                    let spotifyResults =
                        "--------------------------------------------------------------------" +
                        "\nArtist(s): " + response.tracks.items[i].artists[0].name +
                        "\nSong Name: " + response.tracks.items[i].name +
                        "\nAlbum Name: " + response.tracks.items[i].album.name +
                        "\nPreview Link: " + response.tracks.items[i].preview_url;

                    console.log(spotifyResults);
                }
            })

            .catch(function (err) {
                console.log(err);
            });
    }
}


// OMDBAPI code should go here for "movie-this" code "
// call movie-this code here 
function movieQuery() {

    // if userput for movie-this is blank, default to Mr. Nobody.
    if (userInput === "") {
        var queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy"
        console.log(" * If you haven't watched \"Mr. Nobody,\" then you should: <http://www.imdb.com/title/tt0485947/>");

        console.log(" * It's on Netflix!")
    }
    else {

        // api response string for omdb api 
        var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy"

    }

    // We then run the get request with axios module on the URL 
    axios.get(queryUrl).then(function (response) {

        // Then we print out the response data 
        console.log("The movie's Title is: " + response.data.Title);
        console.log("The year of the movie is: " + response.data.Year);
        console.log("The movie's IMDB rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
        console.log("The movie's Country of origin is: " + response.data.Country);
        console.log("The movie's Language is: " + response.data.Language);
        console.log("The plot of the movie is: " + response.data.Plot);
        console.log("The movie actors are: " + response.data.Actors);
    }

    )

        //logic for catching errors 
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });

} // end of movie() function


// code should go here for "do-what-it-says" code "
// function to run doRandom() function
function doRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        //split the text in the random.txt file 
        let dataArr = data.split(",");

        //declare the first half of text file as the task variable
        task = dataArr[0];
        //declare the second half of the random.txt as userInput variable 
        userInput = (dataArr[1]);


        //switch statement to call the function for the specific command 
        // that is configured in the random.txt 
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

        }
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
    });
}