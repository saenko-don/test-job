const state = {
    showPreloader: true,
    allowInfinite: true,
    isActiveLoginForm: false,
};

const getters = {};

const actions = {
};

const mutations = {
  SET_STATE_PRELOADER: (localState, data) => {
    localState.showPreloader = data;
  },

  SET_STATE_LOGIN_FORM: (localState, data) => {
    localState.isActiveLoginForm = data;
  },

  SET_STATE_ALLOW_INFINITE: (localState, data) => {
    localState.allowInfinite = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
