import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import CheckMainColor from './components/CheckMainColor';
import CheckAnyColor from './components/CheckAnyColor';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/main_color">
                    <CheckMainColor />
                </Route>
                <Route path="/any_color">
                    <CheckAnyColor />
                </Route>
                <Route>Not Found</Route>
            </Switch>

            <GlobalStyles />
        </BrowserRouter>
    );
}

export default App;
