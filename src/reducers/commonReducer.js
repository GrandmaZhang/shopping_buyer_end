const initState = {
  tabIndex: 0
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB_INDEX': 
      return {
        ...state,
        tabIndex: action.payload
      }
    default: 
      return state
  }
}