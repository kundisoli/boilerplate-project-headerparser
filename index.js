// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Trust proxy to get real client IP when behind reverse proxy (like freeCodeCamp's testing)
app.set('trust proxy', true);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Request Header Parser API endpoint
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip; // Gets the client's IP address
  const language = req.headers['accept-language']; // Gets the accept-language header
  const software = req.headers['user-agent']; // Gets the user-agent header
  
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});