
function updateTime() {

    localTime_object = moment();
    serverTime_object = moment().utc().subtract(8, 'hours');

    set_localTime(localTime_object.format('HH:mm:ss'));
    set_serverHour(serverTime_object.format('HH:mm:ss'));
}