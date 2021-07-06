import React, { useState } from 'react';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';
import { useSelector } from 'react-redux';

const LanguageMenu = () => {
    const dispatch = useDispatch();
    const selectLang = (lang) => {
        dispatch(languageChanged(lang));
    };

    const lang = useSelector((state) => state.language);
    console.log(lang);

    return (
        <div>
            <Menu>
                <MenuButton style={{ fontSize: '0.8rem' }}>
                    Languages<span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem
                        style={{ fontSize: '0.9rem' }}
                        onSelect={() => dispatch('ja')}
                    >
                        日本語
                    </MenuItem>
                    <MenuItem onSelect={() => dispatch(languageChanged('en'))}>
                        English
                    </MenuItem>
                    <MenuItem onSelect={() => dispatch('fr')}>
                        Francais
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default LanguageMenu;
