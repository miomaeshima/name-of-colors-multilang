import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const titleJa = '色の名前';
const titleEn = 'Name of Color';

const Intro = () => {
    const lang = useSelector((state) => state.language[0]);

    let title;
    if (lang === 'ja') {
        title = titleJa;
    } else {
        title = titleEn;
    }

    let text;

    if (lang === 'ja') {
        text = (
            <>
                <p>
                    このサイトではお手持ちの画像中の色について、日本の伝統色としての名前、英語名、フランス語名を調べられます。
                </p>

                <ol>
                    <li>
                        画面右上のセレクトメニューで「日本の伝統色」「English」「Français」の３パレットから一つを選ぶ。
                    </li>
                    <li>
                        画像中、もっとも使われている色を調べる。
                        <br />→{' '}
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/main_color"
                        >
                            Main Colorのページへ
                        </StyledNavLink>
                    </li>
                    <li>
                        画像中、どこでもクリックした箇所の色を調べる。
                        <br />→{' '}
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/any_color"
                        >
                            Any Colorのページへ
                        </StyledNavLink>
                    </li>
                </ol>
                <br />

                <p>
                    選んだパレットから、調べたい色、ないしは、一番近い色が選びだされます。各パレットにある色の数や種類が違うので、それぞれに「一番近い色」も変わります。
                </p>
            </>
        );
    } else {
        text = (
            <>
                <p>
                    You can look up <strong>the name of colors</strong> in any image you have in
                    English, French, or as colors used in traditional Japanese
                    arts and crafts.
                </p>

                <ol>
                    <li>
                        Choose “Japanese traditional colors（日本の伝統色）,”
                        “English,” or “Français” language/palette on the select menu at
                        the right top corner of the screen.
                    </li>
                    <li>
                        To find the name of the most used color in your image
                        <br />→ Go to{' '}
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/main_color"
                        >
                            Main Color
                        </StyledNavLink>
                    </li>
                    <li>
                        To find the name of any color used in an image
                        <br />→ Go to{' '}
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/any_color"
                        >
                            Any Color
                        </StyledNavLink>
                    </li>
                </ol>

                <p>
                    The app finds the exact or the colosest match to the color
                    you chose. As the colors in the palettes are not exactly the
                    same, you can get a different result depending on the
                    palette.
                </p>
            </>
        );
    }

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Introduction>{text}</Introduction>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    max-width: 600px;
    min-width: 300px;
    margin-top: 70px;
    margin-left: 250px;
    margin-right: auto;
    padding: 48px 64px 32px 64px;
    background: rgba(0, 0, 150, 0.3);
`;

const Title = styled.div`
    font-family: '游明朝', 'Yu Mincho', YuMincho, 'Hiragino Mincho Pro', serif;
    font-size: 56px;
    margin-bottom: 32px;
`;

const Introduction = styled.div`
    padding-left: 5px;
    color: white;

    p {
        margin-bottom: 16px;
    }

    ol {
        margin-left: 9px;
    }
    li {
        list-style-type: square;
        margin-left: 9px;
        margin-bottom: 12px;
    }
`;

const StyledNavLink = styled(NavLink)`
    color: white;
`;
export default Intro;
