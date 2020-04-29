import { LOGIN } from "../../constants/user";

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
    default:
      return state;
  }
}
