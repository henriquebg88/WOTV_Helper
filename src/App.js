import React from 'react';

import './global.css';

import Routes from './routes';
import TopMenu from './pages/common/TopMenu';
import ResetTimer from './pages/common/ResetTimer';

function App() {

	// var localTime_object = moment();
	// var serverTime_object = moment().utc().subtract(8, 'hours');
	
    // const [localTime, set_localTime] = useState(0);
    // const [serverHour, set_serverHour] = useState(0);

    // const today = moment().weekday();

	// setInterval(updateTime, 1000);

    // function updateTime() {

    //     localTime_object = moment();
    //     serverTime_object = moment().utc().subtract(8, 'hours');
    
    //     set_localTime(localTime_object.format('HH:mm:ss'));
    //     set_serverHour(serverTime_object.format('HH:mm:ss'));
    // }

	return (

		<div className="App">

			<TopMenu/>
			<div className="content">
				<Routes />
				<ResetTimer/>
			</div>

		</div>
	);
}


export default App;
