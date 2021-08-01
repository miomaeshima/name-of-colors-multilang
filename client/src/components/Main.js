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
        text = <p>日本の伝統色には味わい深い名前がいっぱい。こちらのサイトでは、お手持ちの画像の中にどんな伝統色があるのか、画像を選び、クリックするだけで調べられます。ただ青でなく「勿忘草（わずれなぐさ）」、赤ではなく「梅重（うめかさね）」、、、ぜひ繊細な名前を見つけてみてください。<br/>趣のある色の名前を持つのは日本語だけではありません。右上のメニューから、英語、フランス語のパレットにも切り替えられます。<br/>このサイトでは、色について二つの選び方を用意しています。一つはMain Colorというページで、画像で一番使われている色について調べられます。もう一つはAny Colorというページで、こちらでは、画像上のどこでもクリックした場所の色について調べることができます。<br/>どちらも、選んだパレットから、調べたい色か、その色がなければ、それに一番近い色が選びだされて返ってきます。「日本の伝統色」、「English」、「Français」の各パレットにある色の数や種類が違うのでパレットによって「一番近い色」も変わってきます。実際にパレット／言語を切り替えてみると、返ってくる色の名前が違うことに気づかれると思います。</p>;
    }

    return (
        <Wrapper>
            <Title>{title}</Title>
            {text}
            <ButtonContainer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 70%;
    height: 300px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 21px;
    padding-left: 32px;
    background: rgba(0, 0, 150, 0.1);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

const Title = styled.div`
    font-family: '游明朝', 'Yu Mincho', YuMincho, 'Hiragino Mincho Pro', serif;
    font-size: 48px;
`;

const P = styled.p`
padding-left: 5px;
    max-width: 50ch;
    color: white;
`;

export default Main;
