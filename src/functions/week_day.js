
module.exports = {

    day_number() {
        var day = new Date();
        var week_day = day.getDay();

        return week_day;
    },
    
    day_name(day_number) {
        var day_name;

        switch (day_number) {
            case 1:
                day_name = 'Segunda Feira';
                break;
            case 2:
                day_name = 'Terça Feria';
                break;
            case 3:
                day_name = 'Quarta Feria';
                break;
            case 4:
                day_name = 'Quinta Feria';
                break;
            case 5:
                day_name = 'Sexta Feria';
                break;
            case 6:
                day_name = 'Sábado';
                break;
            case 7:
                day_name = 'Domingo';
                break;
            default:
                break;
        }
        return day_name;
    },

}