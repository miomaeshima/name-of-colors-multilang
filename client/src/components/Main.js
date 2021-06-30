import React from 'react';
import styled from 'styled-components/macro';
import ButtonContainer from './ButtonContainer';

const Main = () => {
    return (
        <div>
            <Introduction>Name of colors is the name of an app.</Introduction>
            <ButtonContainer />
        </div>
    );
};

const Introduction = styled.div``;

export default Main;
