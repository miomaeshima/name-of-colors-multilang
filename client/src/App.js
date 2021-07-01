import React from 'react';
import GlobalStyles from './GlobalStyles';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <GlobalStyles />
        </>
    );
}

export default App;
