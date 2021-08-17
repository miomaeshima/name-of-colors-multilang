import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';
import { useSelector } from 'react-redux';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import { getColor } from '../../utility';
import styled from 'styled-components/macro';
import { Globe } from 'react-feather';

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
        <Wrapper>
            <StyledListbox
                defaultValue={lang}
                // onChange={(value) => dispatch(languageChanged(value))}
                onChange={(value) => changeLang(value)}
            >
                <StyledListboxOption value="ja">
                    日本の伝統色
                </StyledListboxOption>
                <StyledListboxOption value="en">English</StyledListboxOption>
                <StyledListboxOption value="fr">
                    Fran&ccedil;ais
                </StyledListboxOption>
            </StyledListbox>
            <GlobeWrapper>
                <Globe size={'1.2rem'} strokeWidth={1.25} />
            </GlobeWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
`;

const StyledListbox = styled(Listbox)`
    @media (max-width: 1100px) {
        opacity: 0;
        padding: 0px;
       
    }
`;

const GlobeWrapper = styled.div`
    display: none;
    @media (max-width: 1100px) {
        display: revert;
        position: absolute;
        top: 4px;
        right: 32px;

        pointer-events: none;
        width: fit-content;
        //cannot style focus state of @reach litbox directly, so target Wrapper instead with focus-within
        ${Wrapper}:focus-within & {
            outline: 1px solid;
        }
    }
`;

const StyledListboxOption = styled(ListboxOption)`
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
        sans-serif;
`;

export default LanguageMenu;
