import * as types from '../types.js';

const initialState = {
  user: {},
  error: null,
  jwt: null,
  msssage: null,
  authenticated: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        error: false,
        jwt: action.payload.jwt,
        msssage: action.payload.message,
        authenticated: true,
      }
    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: true,
        jwt: null,
        msssage: action.payload.message,
        authenticated: false,
      }
    case types.LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        user: {},
        error: true,
        jwt: null,
        msssage: null,
        authenticated: false,
      }
    
    default:
      return state
  }
}