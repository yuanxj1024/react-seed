export default {
  namespace: 'user',
  state: {
    name: '',
  },
  reducers: {
    name(state, {
      payload: name,
    }) {
      return {
        ...state,
        name,
      };
    }
  },
  effects: {
    * setName(action, {
      put,
      select,
    }) {
      const name = yield select(state => state.name);
      yield put({
        type: 'name',
        payload: name,
      });
    }
  },
};
