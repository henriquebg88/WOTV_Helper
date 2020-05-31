import React from 'react';

import wotv_logo from '../../img/wotv_logo.png';
import { day_name } from '../../functions/week_day';

import { localTime_object, serverTime_object } from '../../functions/time';

import './styles.css';

export default function TopMenu() {
    
    return (
        <header className='data'>
            <img src={wotv_logo} alt="" />
            <h1>{day_name(serverTime_object.weekday())}</h1>
            <div className='time'>
                <p>Dia e Horário do servidor: <span>{serverTime_object.format('HH:mm:ss')}</span></p>
                <p>Horário local: <span>{localTime_object.format('HH:mm:ss')}</span></p>
            </div>
        </header>
    )
}

