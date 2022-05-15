import * as types from '../types.js';

const initialState = {
  user: {},
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}