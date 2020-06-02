import React from 'react';
import { call_bonus ,next_bonus_days } from '../../functions/farplaneBonus';
import { serverTime_object } from '../../functions/time';
import ReactHTMLparser from 'react-html-parser';
import icons from '../../functions/src/icons.json'

import teste from '../../img/ice_element.png'

import './styles.css';

function renderRows(itens) {

    var itens_string = "";
    
    itens.map( (item) => {
        
        let icon = icons.find( () => item ).path;
        itens_string += itens[0] == item ? `<p>${item}</p>` : `<img src="${icon}" />`;
 
    } )

    

    return (
            ReactHTMLparser(itens_string)
    )
};

export default function FarplaneBonusPage() {
    
    var bonusToday = call_bonus(serverTime_object.weekday());

    return (
        <main>
            <h2>Farplane Bônus</h2>
            <section className="farplane">
                {/* Bonus do dia atual */}
                <div id='today_bonus'>
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
                    {next_bonus_days(serverTime_object.weekday()).map((day) => {
                        return (
                            <li key={day}>
                                <h3>{call_bonus(day).dia}</h3>
                                {renderRows(call_bonus(day).bonus_1)}
                            </li>
                        )
                    })}
                </ul>
                <p className='small-info'>*Apesar de o jogo não mostrar, os mesmos bonûs contemplam o Multi.</p>
            </section>
            
        </main>
    )
}