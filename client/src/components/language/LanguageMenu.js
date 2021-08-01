import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';
import { useSelector } from 'react-redux';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import { getColor} from '../../utility';

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
            props.colorArray,
        );   
    };

    return (
        <Listbox
            defaultValue={lang}
            // onChange={(value) => dispatch(languageChanged(value))}
            onChange={(value) => changeLang(value)}
        >
            <ListboxOption value="ja">日本の伝統色</ListboxOption>
            <ListboxOption value="en">English</ListboxOption>
            <ListboxOption value="fr">Fran&ccedil;ais</ListboxOption>
        </Listbox>
    );
};

export default LanguageMenu;
