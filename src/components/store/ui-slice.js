import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = UiSlice.actions;
export default UiSlice.reducer;
