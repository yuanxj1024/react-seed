import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from 'store/configureStore';

import HomeView from './views/home';
import AboutView from './views/about';
import ProductView from './views/product';
import './scss/base.scss';

class Root extends React.Component {
  static defaultProps = {
    subject: '数学'
  }
  constructor(...args) {
    super(...args);
    this.state = {
      name: 'Aaron'
    };
    this.speaking();
  }
  sayHi = () => {}
  render() {
    configureStore();
    return (
      <Provider store={configureStore()}>
        <Router history={hashHistory}>
          <Route path="/" component={HomeView}>
            <Route path="/about" component={AboutView}/>
            <Route path="/product" component={ProductView}/>
          </Route>
        </Router>
      </Provider>
    );
  }
  speaking = () => {}
}

const container = document.getElementById('app');

ReactDom.render(
  <Root/>, container);
