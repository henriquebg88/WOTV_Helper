module.exports = {
    day_name(day_number) {
        var day_name;

        switch (day_number) {
            case 1:
                day_name = 'Segunda Feira';
                break;
            case 2:
                day_name = 'Terça Feira';
                break;
            case 3:
                day_name = 'Quarta Feira';
                break;
            case 4:
                day_name = 'Quinta Feira';
                break;
            case 5:
                day_name = 'Sexta Feira';
                break;
            case 6:
                day_name = 'Sábado';
                break;
            case 0:
                day_name = 'Domingo';
                break;
            default:
                break;
        }
        return day_name;
    }
}