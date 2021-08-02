import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';

const Footer = () => {
    return (
        <Wrapper>
            <Box>
                <Title>About</Title>
                <Announcement>
                    <p>
                        日本の伝統色の美しい名前に魅せられてサイトを作成しました。他の言語でも、RGB値のある色名リストがあればこのサイトに組み込みたく思います。ここぞと思うものがあれば、ぜひお知らせください。また現在、フランス語は日本の伝統色（713色）、英語（972色）に比べ、207色とぴったりの色が返すのに十分な色数とは言えません。よいリストを絶賛募集中です！
                    </p>

                    <p>
                        <span>個人情報の扱い</span>
                        <br />
                        このサイトでは個人情報は収集していません。
                        <br />
                        画像を画面上に表示し、クリックしても、サーバー側に送られるのは調べたい色のRGB値だけで、画像自体はどこにも送られません。
                    </p>

                    <p>
                        <span>謝辞</span>
                        <br />
                        <span>
                            作成にあたり、以下のホームページの背景写真、ロゴ、またデータの参照元を使用しております。この場を借りてお礼を申し上げます。
                        </span>
                    </p>
                </Announcement>
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
                        パレット参照元 :
                        <li>
                            日本の伝統色 |{' '}
                            <a
                                href="http://minagi.p-kit.com/page74767.html"
                                alt="Kimonoto Shikkai Minagi"
                            >
                                きものと悉皆　みなぎ
                            </a>
                        </li>
                        <li>
                            英語 |{' '}
                            <a
                                href="https://en.wikipedia.org/wiki/Lists_of_colors"
                                alt="Wikipedia lists of colors in English"
                            >
                                Wikipedia lists of colors in English
                            </a>
                        </li>
                        <li>
                            フランス語 |{' '}
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
                            repository |{' '}
                            <a
                                href="https://github.com/miomaeshima/name-of-colors-multilang"
                                alt="Name-of-Colors Repository on  Github"
                            >
                                Github
                            </a>
                        </span>
                        <span>
                            contact |{' '}
                            <a
                                href="https://twitter.com/miocoffeecoffee"
                                alt="Twitter"
                            >
                                misho/miomaeshima@miocoffeecoffee
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
`;
const Contact = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
export default Footer;
