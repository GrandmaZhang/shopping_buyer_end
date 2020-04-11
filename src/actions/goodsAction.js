export const changeActiveNavItem = (params) => dispatch => {
  dispatch({
    type: 'CHANGE_ACTIVE_NAV_ITEM',
    payload: params
  })
}

export const changeCategoryItem = (params) => dispatch => {
  dispatch({
    type: 'CHANGE_CATEGORY_ITEM',
    payload: params
  })
}

export const changeCartItem = (params) => dispatch => {
  dispatch({
    type: 'CHANGE_CART_ITEM',
    payload: params
  })
}