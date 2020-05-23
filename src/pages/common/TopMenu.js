import React, { useState } from 'react';
import moment from 'moment';

import wotv_logo from './img/wotv_logo.png';
import { day_name } from './functions/week_day';

export default function TopMenu(params) {
    
    return (
        <header className='data'>
            <img src={wotv_logo} alt="" />
            <div>
                <h1>{day_name(serverTime_object.weekday())}</h1>
                <p>Horário local: <span>{localTime}</span></p>
                <p>Horário do servidor: <span>{serverHour}</span></p>
            </div>
        </header>
    )
}