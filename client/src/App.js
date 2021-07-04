import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';

import MainColor from './components/MainColor';
import AnyColor from './components/AnyColor';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/main_color">
                    <MainColor />
                </Route>
                <Route path="/any_color">
                    <AnyColor />
                </Route>
                <Route>Not Found</Route>
            </Switch>

            <GlobalStyles />
        </BrowserRouter>
    );
}

export default App;
