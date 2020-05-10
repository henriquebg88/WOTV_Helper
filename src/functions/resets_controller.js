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
    resetTimer(moment, reset){
        return moment.hour() - reset.when; 
    }
};