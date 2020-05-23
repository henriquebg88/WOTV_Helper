import React from 'react';
import { call_bonus ,next_bonus_days } from '../../functions/farplaneBonus';

export default function FarplaneBonusPage(props) {
    
    var bonusToday = call_bonus(props.serverTime.weekday());

    return (
        <section>
            {/* Bonus do dia atual */}
            <div id='today_bonus'>
                <h2>Farplane Bônus</h2>
                {/* <h3>{call_bonus(new Date().getDay()).week_day}</h3> */}
                {/* Bonus de hoje */}
                <div>
                    <p>{bonusToday.bonus_description}</p>
                    <div>
                        <div className={'elemento ' + bonusToday.element1}></div>
                        <div className={'elemento ' + bonusToday.element2}></div>
                    </div>
                </div>
            </div>

            {/* Bonus dos proximos dias */}
            <h3>Próximos bonûs diários:</h3>
            <ul>
                {next_bonus_days(props.serverTime.weekday()).map((day) => {
                    return (
                        <li key={day}>
                            <h3>{call_bonus(day).week_day}</h3>
                            <p>{call_bonus(day).bonus_description}</p>
                        </li>
                    )
                })}
            </ul>
            <p className='small_info'>*Apesar de o jogo não mostrar, os mesmos bonûs contemplam o Multi.</p>
        </section>
    )
}