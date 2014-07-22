# OMDB API Exercise

## In-class

### Requirements
Create an Express site that displays a form to the user.
It should have one field that accepts a search term. Use an
Express route to handle the form submission. When the form is
submitted, your handler should make a request to the API from
http://www.omdbapi.com/ for movies matching the search term.

### Steps
- Create an Express App. (done for you :)
- Create a route for the home page ("/"). (done for you :)
- The home page should use an .ejs template to display a `<form>`.
- The form should have an input box that accepts a search term.
- When the user submits the form, create an Express route to catch it.
- Use the `route` module to make a request to http://omdbapi.com for
  movies matching the search term.
- Process the JSON results and display movie info on the page using
  another .ejs template.


## Lab

To be continued...

## Links

- http://omdbapi.com/
- https://github.com/mikeal/request
