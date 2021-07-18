import React from 'react';
import styled from 'styled-components/macro';
import ButtonContainer from './ButtonContainer';
import { useSelector } from 'react-redux';

const titleJa = '色の名前';
const titleEn = 'Names of Colors';
const titleFr = 'Noms de Couleurs';

const Main = () => {
    const lang = useSelector((state) => state.language[0]);

    let title;
    if (lang === 'en') {
        title = titleEn;
    } else if (lang === 'fr') {
        title = titleFr;
    } else {
        title = titleJa;
    }

    let text;
    if (lang === 'en') {
        text = 'Have you ever wondered the name of a color? Coloiro helps you. ';
    } else if (lang === 'fr') {
        text = '';
    } else {
        text = '';
    }

    return (
        <Wrapper>
            <Introduction>
                <Div>
                    <h1>{title}</h1>
                    <p className="balance-text">{text}</p>
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
