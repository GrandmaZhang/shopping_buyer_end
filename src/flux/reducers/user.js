import { LOGIN, SET_USER } from "../../constants/user";

const INITIAL_STATE = {
  num: 0
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload
      };
    case SET_USER:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}
