import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import HomeView from './views/home';
import AboutView from './views/about';
import ProductView from './views/product';

class Root extends Component {
  render() {
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

ReactDom.render(
  <Root/>, document.getElementById('app'));
