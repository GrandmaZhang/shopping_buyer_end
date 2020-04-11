import { combineReducers } from 'redux';
import userReducer from './userReducer'
import goodsReducer from './goodsReducer';
import commonReducer from './commonReducer'

export default combineReducers({
  userReducer,
  goodsReducer,
  commonReducer
})