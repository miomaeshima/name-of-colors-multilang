import React from 'react';
import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';
import LanguageMenu from './language/LanguageMenu'


const Header = () => {
    return (
        <>
            <Logo>Logo</Logo>
            <SubMenuWrapper>
                <SubMenu>
                    <StyledNavLink
                        activeStyle={{ borderBottom: '1px solid black' }}
                        exact
                        to="/"
                    >
                        Home
                    </StyledNavLink>
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
          <MenuWrapper><LanguageMenu/></MenuWrapper>
        </>
    );
};

const Logo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;

const SubMenuWrapper = styled.div`
    width: 100%;
    height: 200px;
`;

const StyledNavLink = styled(NavLink)`
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
