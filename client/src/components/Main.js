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
        text = (
            <>
                <p>
                    日本の伝統色には味わい深い名前がいっぱい。こちらのサイトでは、お手持ちの画像の中にどんな伝統色があるのか、画像を選び、クリックするだけで調べられます。*
                </p>
                <p>
                    趣のある色の名前を持つのは日本語だけではありません。画面右上の「日本の伝統色」と出ているプルダウンメニューから、英語、フランス語のパレットにも切り替えられます。
                </p>
                <p>
                    このサイトでは、色について二つの選び方を用意しています。一つはMain
                    Colorというページで、画像で一番使われている色について調べられます。もう一つはAny
                    Colorというページで、こちらでは、画像上のどこでもクリックした場所の色について調べることができます。どちらのページも、選んだパレットから、調べたい色か、その色がなければ、それに一番近い色が選びだされて返ってきます。
                </p>
                <p>
                    「日本の伝統色」、「English」、「Français」の各パレットにある色の数や種類が違うのでパレットによって「一番近い色」も変わってきます。実際にパレット／言語を切り替えると、返ってくる色と名前が変わるのに気づかれるでしょう。
                </p>
                <p>
                    ＊
                    画像を画面上に表示し、クリックしても、サーバー側に送られるのは調べたい色のRGB値だけで、画像自体はどこにも送られません。
                </p>
              
            </>
        );
    }

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Intro>{text} <ButtonContainer /></Intro>
           
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 73%;

    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 42px 32px 42px;
    background: rgba(0, 0, 150, 0.125);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

const Title = styled.div`
    font-family: '游明朝', 'Yu Mincho', YuMincho, 'Hiragino Mincho Pro', serif;
    font-size: 56px;
`;

const Intro = styled.div`
    padding-left: 5px;
    columns: 2;
    column-gap: 48px;

    color: white;
    p {
        margin-bottom: 16px;
        break-inside: avoid;
    }
`;

export default Main;
