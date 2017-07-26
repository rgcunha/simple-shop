import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import shop from './shop'

export default combineReducers({
  routing: routerReducer,
  counter,
  shop
})
