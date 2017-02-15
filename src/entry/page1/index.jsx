import 'babel-polyfill';
import dva from 'dva';
import model from '../../models/count.js';
import routes from './router.jsx';

const app = dva();
app.model(model);

app.router(routes);

app.start('#app');
