var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({limit: '50mb'}));

app.use('/line', require('./controllers/line-notify/index'));

const http = require('http');
http.createServer(app).listen(4201, function() {
    console.log(`> Ready on https://localhost:4201`);
});
  
module.exports = app;
