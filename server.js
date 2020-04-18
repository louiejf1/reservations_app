// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('', (req, res) => {     res.send('Hello express!') }) 
 
app.get('/weather', (req, res) => {     res.send('Your weather') }) 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});

