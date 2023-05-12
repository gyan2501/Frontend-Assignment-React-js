import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "./ActionTypes";
import axios from "axios";

export const UserRequestAction = () => {
  return { type: USER_REQUEST };
};

export const UserSuccessAction = (payload) => {
  return { type: USER_SUCCESS, payload };
};

export const UserErrorAction = (error) => {
  return { type: USER_ERROR, error };
};

export const getUsers = (paramObj, page) => async (dispatch) => {
  dispatch(UserRequestAction());
  //   _page=1&_limit=20
  try {
    axios
      .get(`http://localhost:3000/users?_page=${page}&_limit=20`, paramObj)
      .then((res) => dispatch(UserSuccessAction(res.data)));
  } catch (error) {
    console.log(error);
    dispatch(UserErrorAction());
  }
};
