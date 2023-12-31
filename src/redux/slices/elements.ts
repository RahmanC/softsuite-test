import { createSlice } from "@reduxjs/toolkit";
import {
  createElementLinks,
  createElements,
  deleteElementById,
  deleteElementLinks,
  editElementById,
  editElementLinks,
  getElementById,
  getElementLinks,
  getElements,
} from "axiosConfig/services";

const initialState = {
  elements: [],
  createElement: {},
  singleElement: {},
  elementLinks: [],
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
    updateCreateElement(state, action) {
      state.createElement = action.payload.createElement;
    },
    updateSingleElement(state, action) {
      state.singleElement = action.payload.singleElement;
    },
    updateElementLinks(state, action) {
      state.elementLinks = action.payload.elementLinks;
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
    dispatch(
      slice.actions.updateElements({
        elements: response?.data?.content,
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

// capture element data
export function CaptureElementData(data: {}) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    dispatch(
      slice.actions.updateCreateElement({
        createElement: data,
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

// create element
export function CreateElementData(data: {}, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await createElements(data);

    if (response.status === 201) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// update element
export function UpdateElementData(id: string, data: {}, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await editElementById(id, data);

    if (response.status === 200) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// fetch element by id
export function FetchElementById(id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getElementById(id);
    dispatch(
      slice.actions.updateSingleElement({
        singleElement: response.data,
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

// delete element by id
export function DeleteElement(id: string, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await deleteElementById(id);

    if (response?.status === 200) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// fetch element links
export function FetchElementLinks(id: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getElementLinks(id);
    dispatch(
      slice.actions.updateElementLinks({
        elementLinks: response?.data?.content,
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

// create element link
export function CreateElementLinkData(id: string, data: {}, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await createElementLinks(id, data);

    if (response.status === 201) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// update element link
export function UpdateElementLinkData(
  elementId: string,
  id: string,
  data: {},
  action: any
) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await editElementLinks(elementId, id, data);

    if (response.status === 200) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// delete element link by id
export function DeleteElementLink(elementId: string, id: string, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await deleteElementLinks(elementId, id);

    if (response?.status === 200) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
