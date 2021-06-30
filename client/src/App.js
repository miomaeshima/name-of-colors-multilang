import React from 'react';
import GlobalStyles from './GlobalStyles';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {
    return (
        <>
            <div>
                <Header />
            </div>
            <Main />
            <GlobalStyles />
        </>
    );
}

export default App;
