import 'babel-polyfill';
import dva from 'dva';
import model from '../../models/count.js';
import routes from './views/router.jsx';

// webpack2 tree shaking 测试
import {a} from './test.js';

console.log(a());

const app = dva();
app.model(model);

app.router(routes);

app.start('#app');
