import 'babel-polyfill';

import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import './plugins/vuetify';
import App from './app';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
