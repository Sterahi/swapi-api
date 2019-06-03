import { SHIP_LIST, SHIP_DETAILS, UPDATE_SHIP_LIST, CHARACTER } from './actionTypes'

export const shipList = (ships) => ({
  type: SHIP_LIST,
  payload: {
    ships
  }
})
export const updateShipList = (ships, page) => ({
  type: UPDATE_SHIP_LIST,
  payload: {
    ships,
    page
  }
})
export const shipDetails = (ship) => ({
  type: SHIP_DETAILS,
  payload: {
    ship
  }
})
export const getCharacters = (character) => ({
  type: CHARACTER,
  payload: {
    character
  }
})
