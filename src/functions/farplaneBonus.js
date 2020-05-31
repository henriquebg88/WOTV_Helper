var farplaneDailyBonus = require('./src/farplaneDailyBonus.json');

module.exports =
{
    call_bonus(day) {

        var bonus_1 = [];
        var bonus_2 = [];
        var dia = farplaneDailyBonus[day].dia;

        bonus_1.push(farplaneDailyBonus[day].tipo_1);
        farplaneDailyBonus[day].itens_1.map( (item) => {
            bonus_1.push(item);
        } );

        if (farplaneDailyBonus[day].tipo_2) {
            bonus_2.push(farplaneDailyBonus[day].tipo_2);
            farplaneDailyBonus[day].itens_2.map( (item) => {
                bonus_2.push(item);
            } );
        }

        return { dia, bonus_1, bonus_2 }

    },
    next_bonus_days(day) {
        var days = [];

        for (let i = 1; i < 7; i++) {
            var next_day = day + i;
            if (next_day > 6) {
                next_day -= 7;
            }
            days.push(next_day);
        }

        return days;
    }
}