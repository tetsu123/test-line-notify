const express = require('express');
const router = express.Router();
const service = require('../../service/lineNotify');
const line = require('@line/bot-sdk');

// create LINE SDK config from env variables
const secret = 'e0541bbc5e64b951b1f5f4c42d338f6e';
const token = 'TJ7zvFrDTb+4rd0LLqeDh5QVk8IqbNeLvXbHG5Prrxwd5fhO+RuDpUjgeisY50Tsb026CZQz1+ZMBYUIZV5Q7JCz/58rrKoyoLBXhsscU4fksVi+SFfTpYRBVhH5GDtvxGjQKp5vAemKZPMBMN7WhAdB04t89/1O/w1cDnyilFU=';
const config = {
  channelAccessToken: token,
  channelSecret: secret
};

// create LINE SDK client
const client = new line.Client(config);

router.post('/', async (req, res) => {
    console.log('req.body', req.body);
    let events = req.body.events[0];
    let text = events.message.text || '';
    let replyToken = events.replyToken || '';
    console.log('event.message', events.message);
    console.log('text', text);

    let payload = {
        type: 'text',
        text: text
    };
    let responseMessage = client.replyMessage(replyToken, payload);
    res.json(responseMessage);
});

module.exports = router;