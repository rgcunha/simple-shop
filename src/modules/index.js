import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import shop from './shop'

export default combineReducers({
  routing: routerReducer,
  shop
})
