import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../components/language/languageSlice';

export default configureStore({
    reducer: {
        language: languageReducer,
    },
});
