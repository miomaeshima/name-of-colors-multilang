import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

const Header = () => {
    return (
        <>
            <Logo>Logo</Logo>
            <SubMenuWrapper>
                <SubMenu>
                    <Link to="/">Home</Link>
                    <Link to="/main_color">Main Color</Link>
                    <Link to="/any_color">Any Color</Link>
                </SubMenu>
            </SubMenuWrapper>
            <MenuWrapper>
                {' '}
                <Menu>
                    <MenuButton style={{ fontSize: '0.8rem' }}>
                        Languages<span aria-hidden>▾</span>
                    </MenuButton>
                    <MenuList>
                        <MenuItem style={{ fontSize: '0.9rem' }}>
                            日本語
                        </MenuItem>
                        <MenuItem>English</MenuItem>
                        <MenuItem>Francais</MenuItem>
                    </MenuList>
                </Menu>
            </MenuWrapper>
        </>
    );
};

const Logo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;

const SubMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const SubMenu = styled.div`
    display: flex;
    gap: 30px;
    /* background: pink; */
    min-width: 500px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
`;

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
`;

export default Header;
