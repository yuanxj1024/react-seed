import * as types from 'constants/action-types';

const initialState = {
  basicInfo: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.INIT_USER_INFO:
      return Object.assign({}, state, {
        basicInfo: action.user,
      });
    default:
      return state;
  }
}
