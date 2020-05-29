import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Paginas
import FarplaneBonus from './pages/FarplaneBonus';
import GuildInfo from './pages/guildInfo';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/farplane'component={FarplaneBonus} />
                <Route path='/'component={GuildInfo} />
            </Switch>
        </BrowserRouter>
    )
}