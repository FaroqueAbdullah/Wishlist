import * as type from '../types.js';

export function logInUser() {
  return {
    type: type.LOG_IN_USER,
    payload: user,
  }
}