import { setUserInfo } from "../../flux/actions/user";

export const mapStateToProps = state => ({
  ...state.user
});

export const mapDispatchToProps = dispatch => ({
  setUserInfo: params => dispatch(setUserInfo(params))
});
