import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: 1 },
  reducers: {
    changeTheme(state, action) {
      const t = action.payload;
      state.theme = t;
    },
  },
});

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;
