import React from 'react';
import {Router} from 'dva/router';
// import LoginView from './login/login.jsx';
import LayoutView from './layout/layout.jsx';
import RouteConfig from './router-config.js';

console.log(111, RouteConfig);

// const routers = ({history}) => <Router history={history}>
//   <Route path="/" component={CountApp}/>
// </Router>;

const routers = ({
  app: {
    _store: {
      getState
    }
  },
  history
}) => {
  // 验证权限
  const checkAuth = () => {
    const {user} = getState();
    console.log(user);
  };

  const createRoute = (list) => {
    return list.map((item) => {
      const route = {
        path: item.route,
        breadcrumbName: item.name,
        getComponent: (nextState, callback) => {
          import(`${item.component}`).then((component) => {
            callback(null, component.default);
          });
        }
      };
      if (item.subRoute && item.subRoute.length > 0) {
        const firstSub = item.subRoute[0];
        route.indexRoute = {
          getComponent: (loc, cb) => {
            import(`${firstSub.component}`).then((component) => {
              cb(null, component.default);
            });
          }
        };
        route.childRoutes = createRoute(item.subRoute);
      }
      route.onEnter = checkAuth;
      return route;
    });
  };

  const childRoutes = createRoute(RouteConfig);
  // console.log(childRoutes);

  const routes = [
    {
      path: '/',
      component: LayoutView,
      indexRoute: {
        getComponent: childRoutes[0].getComponent,
        // getComponent: (l, cb) => {
        //   import('./home/index.jsx').then((component) => {
        //     cb(null, component.default);
        //   });
        // }
      },
      childRoutes
    }
  ];
  return (<Router history={history} routes={routes}/>);
};

export default routers;
