import React from 'react';

import { day_name, day_number } from './functions/week_day';
import { brazil_time, server_time } from './functions/hour';
import { call_bonus, next_bonus_days } from './functions/farplaneBonus';

import './styles.css';
import wotv_logo from './img/wotv_logo.png';

function App() {

	return (
		<div className="App">

			{/* Dia e Horarios */}
			<header className='data'>
				<img src={wotv_logo} alt="" />
				<div>
					<h1>{day_name(day_number())}</h1>
					<p>Horário local: <span>{brazil_time.toLocaleTimeString()}</span></p>
					<p>Horário do servidor: <span>{server_time.toLocaleTimeString()}</span></p>
				</div>
			</header>

			<div className="content">
				<section>
					{/* Bonus do dia */}
					<div id='today_bonus'>
						<h2>Bônus disponivel</h2>
						{/* <h3>{call_bonus(new Date().getDay()).week_day}</h3> */}
						{/* Bonus de hoje */}
						<p>{call_bonus(new Date().getDay()).bonus_description}</p>
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
