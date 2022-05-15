import * as type from '../types.js';

export function logInUserRequest( user ) {
  return {
    type: type.LOG_IN_USER_REQUEST,
    payload: user,
  }
}

export function logInUserSuccss( user ) {
  return {
    type: type.LOG_IN_USER_SUCCESS,
    payload: user,
  }
}

export function logInUserFailed( user ) {
  return {
    type: type.LOG_IN_USER_FAILURE,
    payload: user,
  }
}

