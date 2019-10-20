// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
extend('required', {
  ...required,
  message: 'This field is required',
});
Vue.component('ValidationProvider', ValidationProvider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
