
    var brazil_time = new Date();
    var server_time = new Date();
 
    server_time.setTime(server_time.getTime() - (5*60*60*1000));

module.exports =  { brazil_time, server_time};
