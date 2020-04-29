import { LOGIN } from "../../constants/user";

export const changeLogin = params => dispatch => {
  dispatch({
    type: LOGIN,
    payload: params
  });
};
