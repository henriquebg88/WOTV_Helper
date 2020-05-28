import React from 'react';

import { resetStack, resetActive, resetTimer } from '../../functions/resets_controller';
import Resets from '../../functions/src/resets.json';
import { localTime_object, serverTime_object } from '../../functions/time';

import './styles.css';

export default function ResetTimer(params) {
    return (
        <aside>
            <div id='resets'>
                <h2>Resets</h2>
                <ul>
                    {resetStack(Resets).map((reset) => {
                        { var reset_element = resetTimer(localTime_object, serverTime_object, reset) }
                        return (
                            <li key={reset.title + reset.when} className={reset_element.htmlClass}>
                                <p className='timer'>{reset_element.timerString}</p>
                                <h3>{reset.title}</h3>
                                <p className='description'>{reset.description}</p>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </aside>
    );
}