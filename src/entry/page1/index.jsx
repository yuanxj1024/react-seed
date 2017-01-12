import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import HomeView from './views/home';
import AboutView from './views/about';
import ProductView from './views/product';

class Root extends React.Component {
  static defaultProps = {
    subject: '数学',
  }
  static runing() {
  }
  constructor(...args) {
    super(...args);
    this.state = {
      name: 'Aaron',
    };
    this.speaking();
  }
  sayHi() {
    return this;
  }
  speaking = () => {
  }
  render() {
    Root.runing();
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={HomeView}>
            <Route path="/about" component={AboutView}/>
            <Route path="/product" component={ProductView}/>
          </Route>
        </Router>
      </div>
    );
  }
}

const container = document.getElementById('app');

ReactDom.render(
  <Root/>, container);
