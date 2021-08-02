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
                        また、この場を借りまして、作成にあたり、ホームページの背景写真、ロゴ、またデータの参照元でお世話になったサイトにお礼を申しあげます。
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
    height: 100%;
    background: ${COLORS.Awafujiiro};
`;

const Box = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding: 32px;
    background: lightblue;
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
    width: fit-content;
    margin: 0 auto 32px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Contact = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 32px;
    width: 70ch;
`;
export default Footer;
