import { createSlice } from '@reduxjs/toolkit';

const initialState = ['ja'];

const languageSlice = createSlice({
    name: 'language',
    initialState,
    //writing a function in the following object triggers createSlice to automatically generate an action creator function with the same name.
    reducers: {
        languageChanged(state, action) {
            state[0] = action.payload;
        },
    },
});
//automatically generated action creator function
export const { languageChanged } = languageSlice.actions;

//languageSlice.reducer function is generated by createSlice
export default languageSlice.reducer;
