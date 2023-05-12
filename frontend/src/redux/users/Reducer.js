import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "./ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case USER_SUCCESS: {
      return { ...state, isLoading: false, users: payload };
    }

    case USER_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
