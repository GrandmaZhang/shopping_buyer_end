import { changeLogin } from "../../flux/actions/user";

export const mapDispatchToProps = dispatch => ({
  changeLogin: params => dispatch(changeLogin(params))
});

export const mapStateToProps = state => ({
  ...state
});
