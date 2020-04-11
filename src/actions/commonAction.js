export const changeTabIndex = (params) => dispatch => {
  dispatch({
    type: 'CHANGE_TAB_INDEX',
    payload: params
  })
}