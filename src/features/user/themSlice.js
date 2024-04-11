import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'; // Corrected spacing issue
        }
    }
});

export const { toggleTheme } = themeSlice.actions; // Export actions
export default themeSlice; // Export reducer
