import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';

import thunk from 'redux-thunk';

import reducers from 'reducers';


const middlewares = compose(applyMiddleware(thunk));

export default function configureStore() {
  const store = createStore(reducers, undefined, middlewares);
  return store;
}
