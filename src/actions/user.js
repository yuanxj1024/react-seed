/**
 * 用户actions
 */

import * as types from 'constants/action-types.js';

export function setUser(user) {
  return {
    type: types.INIT_USER_INFO,
    user,
  };
}

