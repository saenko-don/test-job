const state = {
    showPreloader: true,
    allowInfinite: true,
    isActiveLoginForm: false,
};

const getters = {};

const actions = {
};

const mutations = {
  SET_STATE: (localState, data) => {
    localState.state = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
