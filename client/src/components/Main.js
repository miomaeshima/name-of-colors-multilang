import React from 'react';
import styled from 'styled-components/macro';
import ButtonContainer from './ButtonContainer';

const Main = () => {
    return (
        <Wrapper>
            <Introduction>
                <h1>Name</h1>Name of colors is the name of an app.
                <ButtonContainer />
            </Introduction>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 150vh;
    background: lightblue;
    padding-top: 200px;
`;

const Introduction = styled.div`
    min-width: 500px;
    width: 70%;
    height: 300px;
    /* background: pink;     */
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
`;

export default Main;
