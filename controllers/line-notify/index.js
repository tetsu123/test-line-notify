let express = require('express');
let router = express.Router();

router.use('/', require('./line-notify'));

module.exports = router;
