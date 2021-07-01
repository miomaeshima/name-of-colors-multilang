import React from 'react';
import styled from 'styled-components/macro';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

const Header = () => {
    return (
        <Wrapper>
            <Logo>Logo</Logo>
            <SubMenu>
                <div>About</div>
                <div>Main Color</div>
                <div>Any Color</div>
            </SubMenu>
            <Menu>
                <MenuButton style={{ fontSize: '0.8rem' }}>
                    Languages<span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem style={{ fontSize: '0.9rem' }}>日本語</MenuItem>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Francais</MenuItem>
                </MenuList>
            </Menu>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    height: 32px;
`;

const Logo = styled.div``;

const SubMenu = styled.div`
    display: flex;
    gap: 30px;
    background: pink;
    min-width: 500px;
    width: 60%;
    margin-left: auto;
    margin-left: auto;
`;

export default Header;
