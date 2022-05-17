import * as type from '../types.js';

export function logInUserRequest( user ) {
  return {
    type: type.LOG_IN_USER_REQUEST,
    payload: user
  }
}

export function logInUserSuccss( user ) {
  return {
    type: type.LOG_IN_USER_SUCCESS,
    payload: user
  }
}

export function logInUserFailed( user ) {
  return {
    type: type.LOG_IN_USER_FAILURE,
    payload: user
  }
}

export function signUpUserRequest( user ) {
  return {
    type: type.SIGN_UP_USER_REQUEST,
    payload: user
  }
}

export function loadStateFromLocal(  ) {
  return {
    type: type.LOAD_STATE_FROM_LOCAL
  }
}

export function logOutUserRequest( ) {
  return {
    type: type.LOG_OUT_USER_REQUEST
  }
}

export function logOutUserSuccss( ) {
  return {
    type: type.LOG_OUT_USER_SUCCESS
  }
}
