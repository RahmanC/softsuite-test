import { createSlice } from "@reduxjs/toolkit";
import {
  getDepartments,
  getGradeSteps,
  getGrades,
  getLookupById,
  getLookupValueById,
  getLookupValues,
  getLookups,
  getSuborganization,
} from "axiosConfig/services";

const initialState = {
  lookups: [],
  singleLookup: {},
  classification: [],
  category: [],
  payrun: [],
  suborganization: [],
  department: [],
  jobTitle: [],
  location: [],
  employeeType: [],
  employeeCategory: [],
  grades: [],
  gradeSteps: [],
  union: [],
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
      state.jobTitle = action.payload.jobTitle;
      state.location = action.payload.location;
      state.employeeType = action.payload.employeeType;
      state.employeeCategory = action.payload.employeeCategory;
      state.union = action.payload.union;
    },
    updateLookupValuesById(state, action) {
      state.lookupValueById = action.payload.lookupValueById;
    },
    updateSuborganization(state, action) {
      state.suborganization = action.payload.suborganization;
    },
    updateDepartment(state, action) {
      state.department = action.payload.department;
    },
    updateGrade(state, action) {
      state.grades = action.payload.grades;
    },
    updateGradeStep(state, action) {
      state.gradeSteps = action.payload.gradeSteps;
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
    const employeeCategory = await getLookupValues("3");
    const employeeType = await getLookupValues("4");
    const jobTitle = await getLookupValues("6");
    const location = await getLookupValues("7");
    const union = await getLookupValues("8");
    dispatch(
      slice.actions.updateLookup({
        classification: classification,
        category: category,
        payrun: payrun,
        employeeCategory: employeeCategory,
        employeeType: employeeType,
        jobTitle: jobTitle,
        location: location,
        union: union,
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

// fetch suborg by id
export function FetchSuborganization() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getSuborganization();
    dispatch(
      slice.actions.updateSuborganization({
        suborganization: response.data,
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

// fetch dept
export function FetchDepartments(id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getDepartments(id);
    dispatch(
      slice.actions.updateDepartment({
        department: response.data,
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

// fetch grades
export function FetchGrades() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getGrades();
    dispatch(
      slice.actions.updateGrade({
        grades: response.data,
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

// fetch grade steps
export function FetchGradeSteps(id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getGradeSteps(id);
    dispatch(
      slice.actions.updateGradeStep({
        gradeSteps: response.data,
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
