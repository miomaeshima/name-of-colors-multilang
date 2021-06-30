import React from 'react';
import styled from 'styled-components/macro';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

const Header = () => {
    return (
        <Wrapper>
            <Logo>Name of Colors</Logo>
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

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    height: 32px;
    background-color: lightblue;
    border-bottom: 1px solid black;
`;

const Logo = styled.div``;
