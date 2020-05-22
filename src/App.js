import React, { useState } from 'react';
import moment from 'moment';

import { day_name } from './functions/week_day';
import { call_bonus, next_bonus_days } from './functions/farplaneBonus';
import { resetStack, resetActive, resetTimer } from './functions/resets_controller';
import Resets from './functions/src/resets.json';

import './styles.css';
import wotv_logo from './img/wotv_logo.png';

function App() {

	var localTime_object = moment();
	var serverTime_object = moment().utc().subtract(8, 'hours');
	var timeDiff = localTime_object.hours() - serverTime_object.hours();
	
	const [localTime, set_localTime] = useState(0);
	const [serverHour, set_serverHour] = useState(0);
	
	const today = moment().weekday();

	var bonusToday = call_bonus(serverTime_object.weekday());
	
	setInterval(updateTime, 1000);

	function updateTime() {

		localTime_object = moment();
		serverTime_object = moment().utc().subtract(8, 'hours');

		set_localTime(localTime_object.format('HH:mm:ss'));
		set_serverHour(serverTime_object.format('HH:mm:ss'));
	}

	return (
		<div className="App">

			{/* Dia e Horarios */}
			<header className='data'>
				<img src={wotv_logo} alt="" />
				<div>
					<h1>{day_name(serverTime_object.weekday())}</h1>
					<p>Horário local: <span>{localTime}</span></p>
					<p>Horário do servidor: <span>{serverHour}</span></p>
				</div>
			</header>

			<div className="content">
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
						{next_bonus_days(serverTime_object.weekday()).map((day) => {
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


				<aside>
					<div id='resets'>
						<h2>Resets</h2>
						<ul>
							{resetStack(Resets).map((reset) => {
								{var reset_element = resetTimer(localTime_object, serverTime_object,reset)}
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

			</div>

		</div>
	);
}


export default App;
