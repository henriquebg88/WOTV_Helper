import React, { useState } from 'react';
import moment from 'moment';

import { day_name } from './functions/week_day';
import { call_bonus, next_bonus_days } from './functions/farplaneBonus';

import './styles.css';
import wotv_logo from './img/wotv_logo.png';

function App() {

	const [localTime, set_localTime] = useState(0);
	const [serverHour, set_serverHour] = useState(0);

	const today = moment().weekday();

	setInterval(updateTime, 1000);

	function updateTime() {
		set_localTime( moment().format('HH:mm:ss') );
		set_serverHour( moment().utc().subtract(8,'hours').format('HH:mm:ss') );
	}

	return (
		<div className="App">

			{/* Dia e Horarios */}
			<header className='data'>
				<img src={wotv_logo} alt="" />
				<div>
					<h1>{day_name(today)}</h1>
					<p>Horário local: <span>{localTime}</span></p>
					<p>Horário do servidor: <span>{serverHour}</span></p>
				</div>
			</header>

			<div className="content">
				<section>
					{/* Bonus do dia */}
					<div id='today_bonus'>
						<h2>Bônus disponivel</h2>
						{/* <h3>{call_bonus(new Date().getDay()).week_day}</h3> */}
						{/* Bonus de hoje */}
						<p>{call_bonus(today).bonus_description}</p>
					</div>
					<h3>Próximos bonûs diários:</h3>
					<ul>
						{next_bonus_days().map((day) => {
							return (
								<li key={day}>
									<h3>{call_bonus(day).week_day}</h3>
									<p>{call_bonus(day).bonus_description}</p>
								</li>
							)
						})}
					</ul>	
				</section>

				{/* Bonus nos proximos dias */}
				<aside>
					<h2>Resets</h2>
					<ul>
						{}
					</ul>
				</aside>

			</div>

		</div>
	);
}


export default App;
