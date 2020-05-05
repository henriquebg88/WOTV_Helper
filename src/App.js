import React from 'react';

import { day_name, day_number } from './functions/week_day';
import { brazil_time, server_time } from './functions/hour';
import { call_bonus } from './functions/farplaneBonus';

import './styles.css';
import wotv_logo from './img/wotv_logo.png';

function App() {

	var next_bonus_days = [];

	for (let i = 0; i < 3; i++) {
		var next_day = new Date().getDay() + i;
		if (next_day > 7) {
			next_day -= 7;
		}
		next_bonus_days.push(next_day);
	}

	return (
		<div className="App">

			<img id='wotv-logo' src={wotv_logo} alt="" />

			<section className='data'>
				<h1>{day_name(day_number())}</h1>
				<h3>Horário local: {brazil_time.toLocaleTimeString()}</h3>
				<p>Horário do servidor: {server_time.toLocaleTimeString()}</p>
			</section>


			<h2>Farplane bônus</h2>

			<div>
				<h4>{call_bonus(new Date().getDay()).week_day}</h4>
				<p>{call_bonus(new Date().getDay()).bonus_description}</p>
			</div>

			<ul>
				{next_bonus_days.map((ofset) => {

					var day = new Date().getDay() + ofset;
					if (day > 7) {
						day -= 7;			
					}

					return (
						<li key={day}>
							<p>{call_bonus(day).week_day}</p>
							<h3>{call_bonus(day).bonus_description}</h3>
						</li>
					)
				})}
			</ul>

		</div>
	);
}


export default App;
