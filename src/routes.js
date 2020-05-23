import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Paginas
import FarplaneBonus from './pages/FarplaneBonus';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'component={FarplaneBonus} />
            </Switch>
        </BrowserRouter>
    )
}