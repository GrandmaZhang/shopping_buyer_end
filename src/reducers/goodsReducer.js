const initState = {
  activeNavItem: 1,
  categoryItem: [],
  cartItems: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_NAV_ITEM': 
      return {
        ...state,
        activeNavItem: action.payload
      }
    case 'CHANGE_CATEGORY_ITEM':
      return {
        ...state,
        categoryItem: action.payload
      }
    case 'CHANGE_CART_ITEM':
      return {
        ...state,
        cartItems: action.payload
      }
    default: 
      return state
  }
}