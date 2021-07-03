import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MainColor from './components/MainColor';
import AnyColor from './components/AnyColor';

function App() {
    return (
        <BrowserRouter>
                    <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                    <Footer />
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
