export default {
  watch: {
    '$store.state.user.language'() {
      this.$i18n.locale = this.storeUser.language;
    }
  },
  computed: {
    storeState: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit('SET_STATE', value);
      },
    },

    storeUser: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit('SET_ITEM', value);
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
