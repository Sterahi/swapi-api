import {
  UPDATE_SHIP_LIST
} from '../actionTypes'

const initialState = {
  ships: [],
  page: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SHIP_LIST:
      const { ships, page } = action.payload
      return {
        ...state,
        ships,
        page
      }
    default:
      return state
  }
}
