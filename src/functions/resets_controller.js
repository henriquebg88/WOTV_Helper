module.exports = {
    resetStack(Resets){

        function order_resets(a, b) {
            //If a resets before b, a will be ordered first
            if(a.when < b.when) return -1
            if(a.when > b.when) return 1
            return 0
        }
        Resets.sort(order_resets);

        return Resets;
    },
    resetActive(){
        return null;
    },
    resetTimer(localTime_obj, serverTime_obj, reset){

        var timer = 
        {
            hours: 0,
            minutes: 0,
            seconds: 0,
            timerString: '',
            htmlClass: null
        };

        timer.hours += reset.when - localTime_obj.hours();
        if(timer.minutes > 0) timer.hours -= 1;
        timer.minutes += 59 - localTime_obj.minutes();
        if(timer.seconds > 0) timer.minutes -= 1;
        timer.seconds += 59 - localTime_obj.seconds();

    

        if(timer.hours < 0)
        {
            
            var local_reset = reset.when + localTime_obj.hours() - serverTime_obj.hours();

            timer.timerString = `${local_reset}:00`;
            timer.htmlClass = 'reseted';
            return timer;
        }
        
        timer.timerString = timerStringConstructor(timer.hours, timer.minutes, timer.seconds);
        
        return timer; 

        function timerStringConstructor(hours, minutes, seconds)
        {
    
            var timerString = '';
    
            if(hours < 10)
            {
                timerString = timerString.concat(0);
            }
            timerString = timerString.concat(hours) + ':';     
    
            if(minutes < 10)
            {
                timerString = timerString.concat(0);
            }
            timerString = timerString.concat(minutes) + ':'; 
    
            if(seconds < 10)
            {
                timerString = timerString.concat(0);
            }
            timerString = timerString.concat(seconds); 
    
            return timerString;
        }
    },

};