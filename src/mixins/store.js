export default {
  computed: {
    storeState: {
      get() {
        return this.$store.state.state;
      },
      set(value) {
        this.$store.commit('state/SET_STATE', value);
      },
    },

    storeUser: {
      get() {
        return this.$store.state.user.item;
      },
      set(value) {
        this.$store.commit('user/SET_ITEM', value);
      },
    },
  },
  methods: {
    isActiveLogin() {
      this.storeState.showPreloader = !this.storeState.showPreloader;
      this.storeState.isActiveLoginForm = !this.storeState.isActiveLoginForm;
    },
  }
};
