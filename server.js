// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get('/all', getData)

function getData(req, res) {
  res.send(projectData)
  console.log(projectData);
}

//POST route
// Setup empty JS object to act as endpoint for all routes
projectData = {};

app.post('/addData', addData);

function addData(req, res) {
  console.log(req.body)
  // These are three specific pieces of data the POST route will anticipate receiving
  newEntry = {
    temperature: req.body.temperature,
    date: req.body.date,
    content: req.body.content
  }
  Object.assign(projectData, newEntry);
  //Add data recieved from req.body to the app end point
  res.send(projectData);
}

