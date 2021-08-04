import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';
import { useSelector } from 'react-redux';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import { getColor } from '../../utility';
import styled from 'styled-components/macro';

const LanguageMenu = (props) => {
    const dispatch = useDispatch();

    const lang = useSelector((state) => state.language[0]);

    const changeLang = (value) => {
        dispatch(languageChanged(value));

        getColor(
            props.originalColor,
            value,
            props.setColorData,
            props.setBackgroundColor,
            props.setColorArray,
            props.colorArray
        );
    };

    return (
        <Listbox
            defaultValue={lang}
            // onChange={(value) => dispatch(languageChanged(value))}
            onChange={(value) => changeLang(value)}
        >
            <StyledListboxOption value="ja">日本の伝統色</StyledListboxOption>
            <StyledListboxOption value="en">English</StyledListboxOption>
            <StyledListboxOption value="fr">
                Fran&ccedil;ais
            </StyledListboxOption>
        </Listbox>
    );
};

const StyledListboxOption = styled(ListboxOption)`
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
        sans-serif;
`;

export default LanguageMenu;
