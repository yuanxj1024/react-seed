import 'babel-polyfill';
import dva from 'dva';
import routes from './views/router.jsx';

import bindModels from './models';

const app = dva();
bindModels(app);


app.router(routes);

app.start('#app');
