import { useDispatch } from 'react-redux';
import { languageChanged } from './languageSlice';

const LanguageMenu = () => {
    const dispatch = useDispatch();
    const selectLang = (e) => {
        let choice = e.target.value;
        dispatch(languageChanged(choice));
    };

    return (
        <select onChange={selectLang}>
            <option value="ja">日本の伝統色名</option>
            <option value="en">English</option>
            <option value="fr">Fran&ccedil;ais</option>
        </select>
    );
};

export default LanguageMenu;
