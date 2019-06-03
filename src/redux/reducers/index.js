import { combineReducers } from 'redux'
import shipList from './shipList'
import characters from './characters'

export default combineReducers({
  characters,
  shipList
})
