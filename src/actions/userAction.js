export const isLogin = (params) => dispatch => {
  dispatch({
    type: 'JUDGE_LOGIN',
    payload: params
  })
}

export const changeUserInfo = (params) => dispatch => {
  dispatch({
    type: 'CHANGE_USER_INFO',
    payload: params,
  })
}