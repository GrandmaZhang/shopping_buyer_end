import { changeLogin, setUserInfo } from "../../flux/actions/user";

export const mapDispatchToProps = dispatch => ({
  changeLogin: params => dispatch(changeLogin(params)),
  setUserInfo: params => dispatch(setUserInfo(params))
});

export const mapStateToProps = state => ({
  ...state
});
