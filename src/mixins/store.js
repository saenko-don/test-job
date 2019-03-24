export default {
  watch: {
    '$store.state.user.language'() {
      this.$i18n.locale = this.storeUserLanguage;
    }
  },
  computed: {
    storeStatePreloader: {
      get() {
        return this.$store.state.state.showPreloader;
      },
      set(value) {
        this.$store.commit('state/SET_STATE_PRELOADER', value);
      },
    },

    storeStateAllowInfinite: {
      get() {
        return this.$store.state.state.allowInfinite;
      },
      set(value) {
        this.$store.commit('state/SET_STATE_ALLOW_INFINITE', value);
      },
    },

    storeStateIsActiveLoginForm: {
      get() {
        return this.$store.state.state.isActiveLoginForm;
      },
      set(value) {
        this.$store.commit('state/SET_STATE_LOGIN_FORM', value);
      },
    },

    storeStateTitleLogin: {
      get() {
        return this.$store.state.user.titleLogin;
      },
      set(value) {
        this.$store.commit('user/SET_TITLE_LOGIN', value);
      },
    },

    storeUserLanguage: {
      get() {
        return this.$store.state.user.language;
      },
      set(value) {
        this.$store.commit('user/SET_LANGUAGE', value);
      },
    },
  },
  methods: {
    isActiveLogin() {
      this.storeStatePreloader = !this.storeStatePreloader;
      this.storeStateIsActiveLoginForm = !this.storeStateIsActiveLoginForm;
    },
  }
};
