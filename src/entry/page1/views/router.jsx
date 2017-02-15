import React from 'react';
import { Router, Route } from 'dva/router';
import CountApp from './count/index.jsx';

const routers = ({history}) => <Router history={history}>
  <Route path="/" component={CountApp}/>
</Router>;

export default routers;
