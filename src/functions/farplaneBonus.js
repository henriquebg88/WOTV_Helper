var farplaneDailyBonus = require('./src/farplaneDailyBonus.json');

module.exports =
{
    call_bonus(day) {

        return farplaneDailyBonus[day];

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