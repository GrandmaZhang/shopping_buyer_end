export default (state = {}, action) => {
  switch (action.type) {
    case 'JUDGE_LOGIN': 
      return {
        ...state,
        isLogin: action.payload
      }
    case 'CHANGE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload
      }
    default: 
      return state
  }
}