/**
 * 路由配置
 */
module.exports = [{
  key: 'home',
  name: '首页',
  route: 'home',
  component: './home/index.jsx',
}, {
  key: 'about',
  name: '关于',
  route: 'about',
  component: './about/index.jsx',
}, {
  key: 'count',
  name: '计数器',
  route: 'count',
  component: './count/index.jsx',
}, {
  key: 'product',
  name: '产品',
  route: 'product',
  component: './product/index.jsx',
  subRoute: [{
    key: 'product-detail',
    name: '详情',
    route: 'product-detail',
    component: './product-detail/product-detail.jsx',
  }, {
    key: 'product-list',
    name: '产品列表',
    route: 'product-list',
    component: './product-list/product-list.jsx',
  }],
}];
