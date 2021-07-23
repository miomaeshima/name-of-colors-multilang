import React from 'react';
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import LanguageMenu from './language/LanguageMenu';

const Header = () => {
    return (
        <>
            <Logo
               to="/#"
            >
                Logo
            </Logo>
            <SubMenuWrapper>
                <SubMenu>
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
                </SubMenu>
            </SubMenuWrapper>
            <MenuWrapper>
                <LanguageMenu />
            </MenuWrapper>
        </>
    );
};

const Logo = styled(HashLink)`
    position: fixed;
    top: 0;
    left: 0;
    text-decoration: none;
`;

const SubMenuWrapper = styled.div`
    background: lightgreen;
    width: 100%;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

const StyledNavHashLink = styled(NavHashLink)`
    text-decoration: none;
`;

const SubMenu = styled.div`
    position: sticky;
    top: 16px;
    display: flex;
    gap: 30px;
    /* border: 1px solid;  */
    min-width: 500px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-bottom: 16px;
`;

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
`;

export default Header;
