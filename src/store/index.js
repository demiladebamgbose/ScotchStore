import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
  },
});
