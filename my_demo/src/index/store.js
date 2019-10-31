import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import reduers from './reduers'
import thunk from 'react-thunk'
export default createStore(
  combineReducers(reduers),
  {

  },
  applyMiddleware(thunk)
)