import * as types from '../types.js';

const initialState = {
  user: {},
  error: null,
  loading: false,
  jwt: null,
  msssage: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_USER_REQUEST:
      return {
        ...state,
        user: action.payload
      }
    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        jwt: action.payload.jwt,
        msssage: action.payload.message,
      }
    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        error: true,
        msssage: action.payload.message,
      }
    default:
      return state
  }
}