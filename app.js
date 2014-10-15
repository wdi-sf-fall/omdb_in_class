// We need to require any libraries we want to use.
var express = require("express");
var request = require("request");

// Express requires that we instantiate an app.
var app = express();

// Create a handler to respond to GET requests
// to our home page ("/").
app.get('/', function(req, res){
  res.render('index.ejs');
});

// Create a handler to response to GET requests
// to our search page ("/search").
app.get('/search', function(req, res){

  // Grab the movie title from the URL query string.
  var searchTerm = req.query.movieTitle;

  // Build the URL that we're going to call.
  var url = "http://www.omdbapi.com/?s=" + searchTerm;

  // Call the OMDB API searching for the movie.
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      // The body is a big string of JSON. We want to
      // turn it into an Object so we can more easily
      // dig into it.
      var obj = JSON.parse(body);

      // Render a template (results.ejs) and pass it
      // the search results and call them "movieList".
      res.render("results.ejs", {movieList: obj.Search});
    }
  });
});

app.listen(3000);
