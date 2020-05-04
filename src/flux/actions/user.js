import { LOGIN, SET_USER } from "../../constants/user";

export const changeLogin = params => dispatch => {
  dispatch({
    type: LOGIN,
    payload: params
  });
};

export const setUserInfo = params => dispatch => {
  dispatch({
    type: SET_USER,
    payload: params
  });
};
