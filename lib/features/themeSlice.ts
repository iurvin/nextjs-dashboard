import { createSlice } from '@reduxjs/toolkit';

enum Themes {
  light = 'light',
  dark = 'dark',
}

const initialState = {
  currentTheme: Themes.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === Themes.dark ? Themes.light : Themes.dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
