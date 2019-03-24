import Vue from 'vue';
import Vuex from 'vuex';

import state from './modules/state';
import user from './modules/user';

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  namespace: true,
  plugins: [createPersistedState({storage :  window.localStorage })],
  modules: {
    state,
    user,
  },
});
