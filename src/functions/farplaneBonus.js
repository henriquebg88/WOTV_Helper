module.exports =
{
    call_bonus(day) {
                var bonus_description;
                var week_day;

        switch (day) {
            case 1:
                bonus_description = '2x - Exp, Gil, Ore and CardExp / AbilityExp';
                week_day = 'Segunda Feira';
                return { bonus_description, week_day }
            case 2:
                bonus_description = '2x - Fogo e Vento';
                week_day = 'Terça Feira';
                return { bonus_description, week_day };
            case 3:
                bonus_description = '2x - Agua e Gelo';
                week_day = 'Quarta Feira';
                return { bonus_description, week_day };
            case 4:
                bonus_description = '2x - Pedra e Trevas';
                week_day = 'Quinta Feira';
                return { bonus_description, week_day };
            case 5:
                bonus_description = '2x - Raio e Luz';
                week_day = 'Sexta Feira';
                return { bonus_description, week_day };
            case 6:
                bonus_description = '2x - Job 9+';
                week_day = 'Sábado';
                return { bonus_description, week_day };
            case 7:
                bonus_description = 'Ilimitado - Gil e Ore';
                week_day = 'Domingo';
                return { bonus_description, week_day };
            default:
                break;
        }
    }
}