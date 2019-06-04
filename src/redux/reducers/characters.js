import {
  CHARACTER
} from '../actionTypes'

const initialState = {
  character: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHARACTER:
      const { character } = action.payload
      return {
        ...state,
        character
      }
    default:
      return state
  }
}
