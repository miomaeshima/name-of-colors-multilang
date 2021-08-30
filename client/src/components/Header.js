import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import LanguageMenu from './language/LanguageMenu';
import { refreshPage } from '../utility';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import { useSelector } from 'react-redux';
import { Globe, Menu } from 'react-feather';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { COLORS } from '../constants';

const Header = (props) => {
    const lang = useSelector((state) => state.language[0]);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    let returnToHome;
    if (lang === 'en') {
        returnToHome = 'Return to Home';
    } else if (lang === 'fr') {
        returnToHome = "Retourner à la page d'accueil";
    } else {
        returnToHome = 'ホームに戻る';
    }

    return (
        <>
            <MobileTop>
                <Tooltip label={returnToHome}>
                    <MobileLogo smooth to="/#">
                        <img
                            alt="go back to home"
                            width="24px"
                            src="logo.svg"
                        ></img>
                    </MobileLogo>
                </Tooltip>
                <MobileListWrapper>
                    <GlobeWrapper>
                        <Globe size={'1.2rem'} strokeWidth={1.25} />
                    </GlobeWrapper>
                    <LanguageMenu
                        setColorArray={props.setColorArray}
                        colorArray={props.colorArray}
                        originalColor={props.originalColor}
                        setColorData={props.setColorData}
                        setBackgroundColor={props.setBackgroundColor}
                    />
                </MobileListWrapper>
                <MobileMenuButton onClick={() => setShowMobileMenu(true)}>
                    <Menu size={'1.4rem'} strokeWidth={2} />
                </MobileMenuButton>
                <MobileMenu
                    isOpen={showMobileMenu}
                    onDismiss={() => setShowMobileMenu(false)}
                    mainActivated={props.mainActivated}
                    anyActivated={props.anyActivated}
                />
            </MobileTop>

            <Tooltip label={returnToHome}>
                <StandardLogo smooth to="/#">
                    <img
                        alt="go back to home"
                        width="24px"
                        src="logo.svg"
                    ></img>
                </StandardLogo>
            </Tooltip>
            <NavLinkWrapper>
                <InnerNavLinkWrapper>
                    <StyledNavLink
                        activeStyle={{ borderBottom: '1px solid' }}
                        exact
                        to="/"
                    >
                        Home
                    </StyledNavLink>
                    <div>|</div>
                    <StyledNavHashLink
                        smooth
                        activeStyle={{ borderBottom: '1px solid' }}
                        to="/#about"
                    >
                        About
                    </StyledNavHashLink>
                    <div>|</div>
                    {!props.mainActivated ? (
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/main_color"
                        >
                            MainColor
                        </StyledNavLink>
                    ) : (
                        <FakeStyledNavLink
                            onClick={() =>
                                refreshPage(
                                    props.setPreviewPic,
                                    props.setBackgroundColor,
                                    props.setPicSrc,
                                    props.setColorData
                                )
                            }
                        >
                            MainColor
                        </FakeStyledNavLink>
                    )}
                    <div>|</div>

                    {!props.anyActivated ? (
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/any_color"
                        >
                            AnyColor
                        </StyledNavLink>
                    ) : (
                        <FakeStyledNavLink
                            onClick={() =>
                                refreshPage(
                                    props.setPreviewPic,
                                    props.setBackgroundColor,
                                    props.setPicSrc,
                                    props.setColorData,
                                    props.setColorArray,
                                    props.setAjustment,
                                    props.setOriginalColor
                                )
                            }
                        >
                            AnyColor
                        </FakeStyledNavLink>
                    )}
                </InnerNavLinkWrapper>
            </NavLinkWrapper>
            <ListWrapper>
                <GlobeWrapper>
                    <Globe size={'1.2rem'} strokeWidth={1.25} />
                </GlobeWrapper>
                <LanguageMenu
                    setColorArray={props.setColorArray}
                    colorArray={props.colorArray}
                    originalColor={props.originalColor}
                    setColorData={props.setColorData}
                    setBackgroundColor={props.setBackgroundColor}
                />
            </ListWrapper>
        </>
    );
};

const Logo = styled(HashLink)`
    position: fixed;
    top: 0;
    left: 32px;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 32px;
`;

const StandardLogo = styled(Logo)`
    @media (max-width: 550px) {
        display: none;
    }
`;

const Wrapper = styled.div`
    position: relative;
    height: 32px;
    display: flex;
    align-items: center;
`;

const NavLinkWrapper = styled(Wrapper)`
    display: flex;
    width: clamp(200px, 66%, 85%);
    margin-left: auto;
    margin-right: auto;
    align-items: flex-start;
    /* padding-left: 64px;
    padding-right: 64px; */
    @media (max-width: 550px) {
        pointer-events: none;
    }
`;

const InnerNavLinkWrapper = styled.div`
    width: 600px;
    padding-left: 64px;
    padding-right: 64px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (max-width: 550px) {
        display: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
`;

const FakeStyledNavLink = styled.div`
    border-bottom: 1px solid;
    color: inherit;
    cursor: pointer;
`;

const StyledNavHashLink = styled(NavHashLink)`
    text-decoration: none;
    color: inherit;
`;

const ListWrapper = styled(Wrapper)`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    gap: 16px;

    @media (max-width: 550px) {
        display: none;
    }
`;

const MobileListWrapper = styled(ListWrapper)`
    @media (max-width: 550px) {
        display: revert;
        position: static;
        margin-top: 3px;
    }
`;

const GlobeWrapper = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1100px) {
        display: none;
    }
`;

const MobileTop = styled.div`
    display: none;
    @media (max-width: 550px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: 30px;
        background: ${COLORS.Gray};
        align-items: center;
        padding-top: 2px;
        padding-left: 8px;
        padding-right: 8px;
        z-index: 1;
        color: black;
    }
`;

const MobileLogo = styled(Logo)`
    position: static;
    flex: 1;
`;

const MobileMenuButton = styled.button`
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
`;

export default Header;
