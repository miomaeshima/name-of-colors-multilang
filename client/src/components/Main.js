import React from 'react';
import styled from 'styled-components/macro';
import ButtonContainer from './ButtonContainer';

const Main = () => {
    return (
        <Wrapper>
            <Introduction>
                <h1>Name</h1>
                <p>
                    the end of this article, there’s also a showcase of some
                    excellent web designs that have great website introductory
                    text for our further exploration of the topic.
                </p>
                <h1 class="balance-text">
                    Design Golas are important but not all three needs to be a proper purpose for every comment
                </h1>
                <p>
                    There needs to be a purpose for every component of a
                    website. They each have to support the goals and purpose of
                    the site.In this way, a thoughtful approach to the design
                    and the copy of your website introductory text is
                    important.The goals of your site introduction are:Name of
                    colors is the name of an app.
                </p>
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
