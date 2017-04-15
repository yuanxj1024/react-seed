import {
  get,
} from '../utils/request.js';

import * as API from '../utils/API.js';

export function login(args) {
  return get(API.test, args);
}

export function resetPwd(args) {
  return get(API.test, args);
}
