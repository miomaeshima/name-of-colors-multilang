import React from 'react';
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import LanguageMenu from './language/LanguageMenu';

const Header = () => {
    return (
        <>
            <Logo smooth to="/#">
                Logo
            </Logo>
            <NavLinkWrapper>
                <StyledNavLink
                    activeStyle={{ borderBottom: '1px solid black' }}
                    exact
                    to="/"
                >
                    Home
                </StyledNavLink>
                <StyledNavHashLink
                    smooth
                    activeStyle={{ borderBottom: '1px solid black' }}
                    to="/#about"
                >
                    About
                </StyledNavHashLink>
                <StyledNavLink
                    activeStyle={{ borderBottom: '1px solid black' }}
                    to="/main_color"
                >
                    Main Color
                </StyledNavLink>
                <StyledNavLink
                    activeStyle={{ borderBottom: '1px solid black' }}
                    to="/any_color"
                >
                    Any Color
                </StyledNavLink>
            </NavLinkWrapper>
            <ListWrapper>
                <LanguageMenu />
            </ListWrapper>
        </>
    );
};

const Logo = styled(HashLink)`
    position: fixed;
    top: 0;
    left: 0;
    text-decoration: none;
`;

const Wrapper = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
`;

const NavLinkWrapper = styled(Wrapper)`
    display: flex;
    gap: 30px;
    min-width: 500px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

const StyledNavHashLink = styled(NavHashLink)`
    text-decoration: none;
`;

const ListWrapper = styled(Wrapper)`
    position: fixed;
    top: 0;
    right: 32px;
`;

export default Header;
