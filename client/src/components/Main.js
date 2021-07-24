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
        text =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    } else if (lang === 'fr') {
        text =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    } else {
        text =
            '弾くすぎ何もゴーシュをないでがたくさんのガラスのセロめへ組ん第六ゴーシュ手のおじぎをつかれていだた。子はいますってやるた。譜は二思い床のようが出ながらしまいた。ゴーシュも棒風たりこっちからなっていござい。壁は子をこうに云いながら首をかっこうのようへつりあげがこどもを出てそのままむとそっくりゆうべのとおりぐんぐんを考えてきない。';
    }

    return (
        <Wrapper>
            <h1>{title}</h1>
            <P>{text}</P>
            <ButtonContainer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 70%;
    height: 300px;
    border: 2px solid white;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const P = styled.p`
    max-width: 400px;
    color: white;
`;

export default Main;
