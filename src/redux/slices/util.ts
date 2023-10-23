import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHamburger: false,
  isMobile: false,
};

const slice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    updateView(state) {
      state.showHamburger = !state.showHamburger;
    },
    updateMedia(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export default slice.reducer;

export function ToggleView() {
  return async (dispatch: any) => {
    dispatch(slice.actions.updateView());
  };
}

export function Togglemedia(mobile: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.updateMedia(mobile));
  };
}
