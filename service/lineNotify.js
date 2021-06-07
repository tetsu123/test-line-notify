const lineAPI = require('line-api');
const notify = new lineAPI.Notify({
    token: 'qS1T2DV2JRrUFH5Kv0JphuplFKIcICDTjbhylNH22Pn'
});
const service = {};
const channelAccessToken = 'qS1T2DV2JRrUFH5Kv0JphuplFKIcICDTjbhylNH22Pn';
const LINE_MESSAGE_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
    'Content-Type': "application/json",
    'Authorization': 'Bearer ' + channelAccessToken
};
const unirest = require('unirest');

service.notifyService = () => {
    notify.send({
        message: 'Just test'
    });
};

service.messageAPI = (message) => {
    unirest.post(LINE_MESSAGE_API)
    .headers(LINE_HEADER)
    .timeout(60)
    .send(message)
    .end((response) => {
        console.log('line response: ', response);
    });
};

module.exports = service;