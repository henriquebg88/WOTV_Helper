var moment = require('moment');

var localTime_object = moment();
var serverTime_object = moment().utc().subtract(8, 'hours');

// set_localTime(localTime_object.format('HH:mm:ss'));
// set_serverHour(serverTime_object.format('HH:mm:ss'));

module.exports = {
    localTime_object,
    serverTime_object
}