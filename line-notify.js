const express = require('express');
const router = express.Router();
const service = require('../../service/lineNotify')

router.get('/', async (req, res) => {
    service.notifyService();
});

router.post('/', async (req, res) => {
    // let message = {
    //     to: 
    // };
    service.messageAPI(message);
});

module.exports = router;