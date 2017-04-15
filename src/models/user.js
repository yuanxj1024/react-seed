import {
  login,
} from 'service/login.js';

export default {
  namespace: 'user',
  state: {
    name: '',
    age: 18,
    ajaxResult: 'ajax not start',
  },
  reducers: {
    name(state, {
      payload: name,
    }) {
      return {
        ...state,
        name,
      };
    },
    age(state, {
      payload: age,
    }) {
      return {
        ...state,
        age,
      };
    },
    ajaxResult(state, {
      payload: ajaxResult,
    }) {
      return {
        ...state,
        ajaxResult,
      };
    },
  },
  effects: {
    * setName(action, {
      put,
    }) {
      console.log(111, action.payload);
      yield put({
        type: 'name',
        payload: action.payload,
      });
    },
    * login({
      payload,
    }, {
      put,
      call,
    }) {
      console.log(payload);
      yield put({
        type: 'ajaxResult',
        payload: 'ajax before',
      });
      const result = yield call(login, payload);
      console.log('result', result);
      yield put({
        type: 'ajaxResult',
        payload: 'ajax done',
      });
    },
  },
};
