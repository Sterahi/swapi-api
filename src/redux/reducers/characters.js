import {
  CHARACTER
} from '../actionTypes'

const initialState = {
  characters: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHARACTER:
      const { characters } = action.payload
      return {
        ...state,
        characters
      }
    default:
      return state
  }
}
