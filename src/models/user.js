export default {
  namespace: 'user',
  state: {
    name: '',
  },
  reducers: {
    name(state) {
      return {
        ...state,
        name: state.name
      };
    }
  },
  effects: {
    * name(action, {
      put
    }) {
      yield put({
        type: 'name',
      });
    }
  },
};
