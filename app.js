var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({limit: '50mb'}));

app.use('/line', require('./controllers/line-notify/index'));

const https = require('https');
https.createServer(app).listen(8080, function() {
    console.log(`> Ready on https://localhost:4201`);
});
  
module.exports = app;
