import React, { useState } from 'react';

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
        <select onChange={selectLang}>
           <option>日本語</option>
           <option>English</option>
           <option>Fran&ccedil;ais</option>
        </select>
    );
};

export default LanguageMenu;
