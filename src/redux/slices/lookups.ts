import { createSlice } from "@reduxjs/toolkit";
import {
  getLookupById,
  getLookupValueById,
  getLookupValues,
  getLookups,
} from "axiosConfig/services";

const initialState = {
  lookups: [],
  singleLookup: {},
  classification: [],
  category: [],
  payrun: [],
  lookupValueById: {},
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "lookups",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateLookups(state, action) {
      state.lookups = action.payload.lookups;
    },
    updateSingleLookups(state, action) {
      state.singleLookup = action.payload.singleLookup;
    },
    updateLookup(state, action) {
      state.classification = action.payload.classification;
      state.payrun = action.payload.payrun;
      state.category = action.payload.category;
    },
    updateLookupValuesById(state, action) {
      state.lookupValueById = action.payload.lookupValueById;
    },
  },
});

export default slice.reducer;

// fetch lookups
export function FetchLookups() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getLookups();
    dispatch(
      slice.actions.updateLookups({
        lookups: response.data,
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

// fetch lookup by id
export function FetchLookupById(id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getLookupById(id);
    dispatch(
      slice.actions.updateSingleLookups({
        singleLookup: response.data,
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

// fetch lookup values
export function FetchLookupValues() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const classification = await getLookupValues("2");
    const payrun = await getLookupValues("5");
    const category = await getLookupValues("1");
    dispatch(
      slice.actions.updateLookup({
        classification: classification,
        category: category,
        payrun: payrun,
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

// fetch lookup values by id
export function FetchLookupValuesById(lookupId: string, id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getLookupValueById(lookupId, id);
    dispatch(
      slice.actions.updateLookupValuesById({
        lookupValueById: response.data,
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
