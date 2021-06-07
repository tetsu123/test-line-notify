var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 8080;
const cron = require('node-cron');
const unirest = require('unirest');

app.use(bodyParser.json({limit: '50mb'}));

cron.schedule('5000', async () => {
    try {
        let channelToken = 'TJ7zvFrDTb+4rd0LLqeDh5QVk8IqbNeLvXbHG5Prrxwd5fhO+RuDpUjgeisY50Tsb026CZQz1+ZMBYUIZV5Q7JCz/58rrKoyoLBXhsscU4fksVi+SFfTpYRBVhH5GDtvxGjQKp5vAemKZPMBMN7WhAdB04t89/1O/w1cDnyilFU=';
        let linePushAPI = 'https://api.line.me/v2/bot/message/push';
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + channelToken
        };
        let messages = {
            "to": "C9f1ecd6ee355ebd259d32fd3a742208d",
            "messages": [{
                "type": "text",
                "text": "ถามใคร ใครก็รู้"
            }]
        };
        unirest.post(linePushAPI)
        .headers(headers)
        .timeout(30)
        .send(messages)
        .end((response) => {
            console.log('response', response);
        });
    } catch (error) {
        console.log('error', error);
    }
})

app.use('/webhook', require('./controllers/line-notify/index'));

// const https = require('https');
// https.createServer(app).listen(4200, function() {
//     console.log(`> Ready on https://localhost:4201`);
// });

app.listen(port, () => {
    console.log(`> Ready on https://localhost: ${port}`);
});
  
module.exports = app;
