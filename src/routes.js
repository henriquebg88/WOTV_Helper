import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Paginas
import FarplaneBonus from './pages/FarplaneBonus';
import GuildInfo from './pages/guildInfo';
import GuildMultiGroup from './pages/GuildMuiltiGroups';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/farplane'component={FarplaneBonus} />
                <Route path='/guildmultigroups'component={GuildMultiGroup} />
                <Route path='/'component={GuildInfo} />
            </Switch>
        </BrowserRouter>
    )
}