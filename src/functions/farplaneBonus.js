module.exports =
{
    call_bonus(day) {

        var bonus_description;
        var week_day;
        var element1;
        var element2;

        switch (day) {
            case 1:
                bonus_description = '2x - Exp, Gil, Ore and CardExp / AbilityExp';
                week_day = 'Segunda Feira';
                element1 = 'no_element';
                element2 = 'no_element';
                return { bonus_description, week_day, element1, element2 };
            case 2:
                bonus_description = '2x - Fogo e Vento';
                week_day = 'Terça Feira';
                element1 = 'fire';
                element2 = 'wind';
                return { bonus_description, week_day, element1, element2 };
            case 3:
                bonus_description = '2x - Agua e Gelo';
                week_day = 'Quarta Feira';
                element1 = 'water';
                element2 = 'ice';
                return { bonus_description, week_day, element1, element2 };
            case 4:
                bonus_description = '2x - Pedra e Trevas';
                week_day = 'Quinta Feira';
                element1 = 'stone';
                element2 = 'dark';
                return { bonus_description, week_day, element1, element2 };
            case 5:
                bonus_description = '2x - Raio e Luz';
                week_day = 'Sexta Feira';
                element1 = 'lightening';
                element2 = 'light';
                return { bonus_description, week_day, element1, element2 };
            case 6:
                bonus_description = '2x - Job 9+';
                week_day = 'Sábado';
                element1 = 'no_element';
                element2 = 'no_element';
                return { bonus_description, week_day, element1, element2 };
            case 0:
                bonus_description = 'Ilimitado - Gil e Ore';
                week_day = 'Domingo';
                element1 = 'no_element';
                element2 = 'no_element';
                return { bonus_description, week_day, element1, element2 };
            default:
                console.log('Erro na contagem do dia da semana');
                break;
        }
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