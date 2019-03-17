const state = {
  item: [],
};

const getters = {
  ITEM: localState => localState.item,
  LIST: localState => localState.list,
};

const actions = {

};

const mutations = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
