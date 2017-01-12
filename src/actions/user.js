/**
 * 用户actions
 */

import * as types from 'constants/action-types';

export function setUser(user) {
  return {
    type: types.INIT_USER_INFO,
    user,
  };
}

export function editUser(user) {
  return {
    type: types.EDIT_USER_INFO,
    user,
  };
}
