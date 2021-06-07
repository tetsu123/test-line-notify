const express = require('express');
const router = express.Router();
const service = require('../../service/lineNotify')

router.get('/', async (req, res) => {
    // service.notifyService();
    // res.json({
    //     msg: 'OK'
    // });
    console.log('req.body', req.body);
    // let replyToken = req.body.events[0].replyToken;
    // let msg = req.body.events[0].message.text;

    // console.log('replyToken', replyToken);
    // console.log('msg', msg);

    res.sendStatus(200);
    // res.json({
    //     status: 200,
    //     message: 'Webhook is working!'
    // });
});

// router.post('/', async (req, res) => {
//     // let message = {
//     //     to: 
//     // };
//     service.messageAPI(message);
// });

module.exports = router;