import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';
import { useSelector } from 'react-redux';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

const LanguageMenu = () => {
    const dispatch = useDispatch();
    // const selectLang = (e) => {
    //     let choice = e.target.value;
    //     dispatch(languageChanged(choice));
    // };
    const lang = useSelector((state) => state.language[0]);

    return (
        <Listbox
            defaultValue={lang}
            onChange={(value) => dispatch(languageChanged(value))}
        >
            <ListboxOption value="ja">日本の伝統色</ListboxOption>
            <ListboxOption value="en">English</ListboxOption>
            <ListboxOption value="fr">Fran&ccedil;ais</ListboxOption>
        </Listbox>

        // <select defaultValue={lang} onChange={selectLang}>
        //     <option value="ja">日本の伝統色名</option>
        //     <option value="en">English</option>
        //     <option value="fr">Fran&ccedil;ais</option>
        // </select>
    );
};

export default LanguageMenu;
