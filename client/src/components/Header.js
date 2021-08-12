import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import LanguageMenu from './language/LanguageMenu';
import { refreshPage } from '../utility';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import { useSelector } from 'react-redux';
import { Globe } from 'react-feather';

const Header = (props) => {
    const lang = useSelector((state) => state.language[0]);

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
            <Tooltip label={returnToHome}>
                <Logo smooth to="/#">
                    <img
                        alt="go back to home"
                        width="24px"
                        src="logo.svg"
                    ></img>
                </Logo>
            </Tooltip>
            <NavLinkWrapper>
                <StyledNavLink
                    activeStyle={{ borderBottom: '1px solid' }}
                    exact
                    to="/"
                >
                    Home
                </StyledNavLink>
                <StyledNavHashLink
                    smooth
                    activeStyle={{ borderBottom: '1px solid' }}
                    to="/#about"
                >
                    About
                </StyledNavHashLink>
                {!props.mainActivated ? (
                    <StyledNavLink
                        activeStyle={{ borderBottom: '1px solid' }}
                        to="/main_color"
                    >
                        Main Color
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
                        Main Color
                    </FakeStyledNavLink>
                )}

                {!props.anyActivated ? (
                    <StyledNavLink
                        activeStyle={{ borderBottom: '1px solid' }}
                        to="/any_color"
                    >
                        Any Color
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
                        Any Color
                    </FakeStyledNavLink>
                )}
            </NavLinkWrapper>
            <ListWrapper>
                <Globe size={'1.1rem'} strokeWidth={1.25} />
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
    height: 48px;
    gap: 16px;
    color: inherit;
`;

const Wrapper = styled.div`
    position: relative;
    height: 32px;
    display: flex;
    align-items: center;
`;

const NavLinkWrapper = styled(Wrapper)`
    display: flex;
    gap: 30px;
    min-width: 500px;
    width: 66%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 64px;
    @media(max-width: 1100px){
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
    right: 32px;
    display: flex;
    gap: 16px;
    @media(max-width: 1100px){
        display: none;
    }
`;

export default Header;
