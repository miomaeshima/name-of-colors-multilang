import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';
import { useSelector } from 'react-redux';

const About = () => {
    const lang = useSelector((state) => state.language[0]);
    console.log(lang);

    let announcement, japaneseTraditionalColors, minagi, english, french;

    if (lang === 'ja') {
        announcement = (
            <Announcement>
                <p>
                    日本の伝統色の美しい名前に魅せられてサイトを作成し、英語、フランス語も追加いたしました。現在、フランス語は日本の伝統色（713色）と比較しても、207色とまだ色数が限定的です。お薦めリストをご存じの方がいらっしゃれば、ぜひご連絡ください！
                </p>

                <p>
                    画像を画面上に表示し、クリックしても、サーバー側に送られるのは調べたい色のRGB値のみで、画像自体は送られません。
                </p>

                <p>
                    <span>謝辞</span>
                    <br />
                    <span>
                        作成にあたり、以下のホームページの背景写真、ロゴ、またデータの参照元を使用しました。この場を借りてお礼を申し上げます。
                    </span>
                </p>
            </Announcement>
        );
        japaneseTraditionalColors = '日本の伝統色';
        minagi = 'きものと悉皆　みなぎ';
        english = '英語';
        french = 'フランス語';
    } else {
        announcement = (
            <Announcement>
                <p>
                    This site was originally created out of admiration for the
                    beautiful names of colors used in Japanese traditional arts
                    and crafts. Since then, English and French words have been
                    added.
                </p>

                <p>
                    The app sends only the RGB value of a particular color and
                    not your image over the Internet.
                </p>

                <p>
                    <span>Acknowledgements</span>
                    <br />
                    <span>
                        This site was made with following photographs, logo and
                        data sources.
                    </span>
                </p>
            </Announcement>
        );
        japaneseTraditionalColors = 'Japanese Traditional Colors';
        minagi = 'Kimono Shop MINAGI';
        english = 'English';
        french = 'French';
    }

    return (
        <Wrapper>
            <Box>
                <Title>About</Title>
                {announcement}

                <Credits>
                    <p>
                        Amazing photograph on Home Page by{' '}
                        <a href="https://unsplash.com/photos/uasbgaRTlnA">
                            Lee Jeffs on Unsplash
                        </a>
                        <br />
                        Fabulous logo{' '}
                        <img
                            src="favicon.ico"
                            width="18px"
                            alt="logo"
                        ></img>{' '}
                        made by
                        <a href="https://www.freepik.com" title="Freepik">
                            Freepik
                        </a>{' '}
                        from{' '}
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>
                    </p>

                    <ul>
                        <li>
                            {japaneseTraditionalColors} |{' '}
                            <a
                                href="http://minagi.p-kit.com/page74767.html"
                                alt="Kimonoto Shikkai Minagi"
                            >
                                {minagi}
                            </a>
                        </li>
                        <li>
                            {english} |{' '}
                            <a
                                href="https://en.wikipedia.org/wiki/Lists_of_colors"
                                alt="Wikipedia lists of colors in English"
                            >
                                Wikipedia lists of colors in English
                            </a>
                        </li>
                        <li>
                            {french} |{' '}
                            <a
                                href="https://fr.wikipedia.org/wiki/Liste_de_noms_couleur"
                                alt="Wikipedia list of names of colors in French"
                            >
                                Wikipedia list of names of colors in French
                            </a>
                        </li>
                    </ul>
                    <Contact>
                        <span>
                            Repository |{' '}
                            <a
                                href="https://github.com/miomaeshima/name-of-colors-multilang"
                                alt="Name-of-Colors Repository on  Github"
                            >
                                Github
                            </a>
                        </span>
                        <span>
                            Contact |{' '}
                            <a
                                href="https://www.linkedin.com/in/miomaeshima/"
                                alt="Linkedin account"
                            >
                                https://www.linkedin.com/in/miomaeshima/
                            </a>
                        </span>
                    </Contact>
                </Credits>
                <div id="about"></div>
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: ${COLORS.Gray};
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    max-width: 600px;
    min-width: 300px;
    background: ${COLORS.AboutWrapper};
    padding: 32px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 32px;
`;

const Announcement = styled.div`
    max-width: 70ch;
    p {
        margin-bottom: 16px;
    }
`;

const Credits = styled.div`
    margin: 0 auto 0px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    p > img {
        transform: translateY(4px);
    }
    ul,
    li {
        list-style-type: square;
        padding-left: 14px;
    }
`;
const Contact = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
export default About;
