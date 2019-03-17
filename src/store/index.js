import Vue from 'vue';
import Vuex from 'vuex';

import state from './modules/state';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  modules: {
    state,
    user,
  },
});
