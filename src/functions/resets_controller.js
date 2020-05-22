module.exports = {
    resetStack(Resets){

        //Ajusta a ordem dos resets pelo tempo
        function order_resets(a, b) {
            if(a.when < b.when) return -1
            if(a.when > b.when) return 1
            return 0
        }
        Resets.sort(order_resets);
        //retorna a lista reordenada
        return Resets;
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

        timer.hours += reset.when - serverTime_obj.hours();
        timer.minutes += 59 - serverTime_obj.minutes();
        timer.seconds += 59 - serverTime_obj.seconds();
            if(timer.minutes > 0){
                timer.hours --;
            };
    
        if(reset.title == 'Geral' )
        {
            timer.htmlClass = 'geral';
        }
        if(timer.hours < 0)
        {
            var local_reset = reset.when + localTime_obj.hours() - serverTime_obj.hours();

            timer.timerString = `${local_reset}:00`;
            timer.htmlClass = 'hidden';
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
            timerString = timerString.concat(minutes); 
    
            //UNCOMMENT to show seconds on RESETS

            // timerString += ':'
            // if(seconds < 10)
            // {
            //     timerString = timerString.concat(0);
            // }
            // timerString = timerString.concat(seconds); 
    
            return timerString;
        }
    },

};