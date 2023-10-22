import { createSlice } from "@reduxjs/toolkit";
import { getElements } from "axiosConfig/services";

const initialState = {
  elements: [],
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateElements(state, action) {
      state.elements = action.payload.elements;
    },
  },
});

export default slice.reducer;

// fetch elements
export function FetchElements() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getElements();
    console.log("respo", response);
    dispatch(
      slice.actions.updateElements({
        elements: response.data.content,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
