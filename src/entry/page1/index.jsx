import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import HomeView from './views/home';
import AboutView from './views/about';
import ProductView from './views/product';

class Root extends React.Component {
  test: 'ste'
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={HomeView}>
            <Route path="/about" component={AboutView} />
            <Route path="/product" component={ProductView} />
          </Route>
        </Router>
      </div>
    );
  }
}

const container = document.getElementById('app');

ReactDom.render(<Root />, container);
