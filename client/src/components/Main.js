import React from 'react';
import styled from 'styled-components/macro';
import ButtonContainer from './ButtonContainer';

const Main = () => {
    return (
        <Wrapper>
            <Introduction>
                <Div>
                    <h1>Name</h1>
                    <p className="balance-text">
                        the end of this article, there’s also a showcase of some
                        excellent web designs that have great website
                        introductory text for our further exploration of the
                        topic.
                    </p>
                    <ButtonContainer />
                </Div>
            </Introduction>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 150vh;
    background: lightblue;
`;

const Introduction = styled.div`
    width: 70%;
    height: 300px;
    /* border: 2px solid; */
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;

`;

const Div = styled.div`
    width: 500px;
`;
export default Main;
