var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json({limit: '50mb'}));

// app.get('/', (req, res) => {
//     console.log('first');
//     res.send('Hello');
// })
app.use('/webhook', require('./controllers/line-notify/index'));

// const https = require('https');
// https.createServer(app).listen(4200, function() {
//     console.log(`> Ready on https://localhost:4201`);
// });

app.listen(port, () => {
    console.log(`> Ready on https://localhost: ${port}`);
});
  
module.exports = app;
