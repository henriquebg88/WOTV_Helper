import React from 'react';
import { call_bonus, next_bonus_days } from '../../functions/farplaneBonus';
import { serverTime_object } from '../../functions/time';
import ElementIcons from '../../img/index';

import './styles.css';


export default function FarplaneBonusPage() {

    var bonusToday = call_bonus(serverTime_object.weekday());

    return (
        <main>
            <h2>Farplane Bônus</h2>
            <section className="farplane">
                {/* Bonus do dia atual */}
                <div id='today_bonus'>
                    <h3>{bonusToday.dia}</h3>
                    {/* Bonus de hoje */}
                    <div>
                        <p>
                            {call_bonus(serverTime_object.weekday()).bonus_1.map((item) => {
                                console.log(item);
                                if (item.in('dark', 'light', 'fire', 'ice', 'wind', 'stone', 'water', 'lightning')) {
                                    return (
                                        <>
                                            <img src={ElementIcons(item)} className='bonus-icon-today' />
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            {item}
                                        </>
                                    )
                                }
                            })}
                        </p>
                        <div>


                        </div>
                    </div>
                </div>

                {/* Bonus dos proximos dias */}
                <h3>Próximos bonûs diários:</h3>
                <ul>
                    {next_bonus_days(serverTime_object.weekday()).map((day) => {
                        return (
                            <li key={day}>
                                <h3>{call_bonus(day).dia}</h3>
                                {/* <img src={renderRows(call_bonus(day).bonus_1)} alt=""/> */}
                                {call_bonus(day).bonus_1.map((item) => {
                                    console.log(item);
                                    if (item.in('dark', 'light', 'fire', 'ice', 'wind', 'stone', 'water', 'lightning')) {
                                        return (
                                            <>
                                                <img src={ElementIcons(item)} className='bonus-icon' />
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                {item}
                                            </>
                                        )
                                    }
                                })}

                            </li>
                        )
                    })}
                </ul>
                <p className='small-info'>*Apesar de o jogo não mostrar, os mesmos bonûs contemplam o Multi.</p>
            </section>

        </main>
    )
}