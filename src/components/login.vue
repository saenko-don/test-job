<template>
  <f7-page>
    <div class="page no-navbar no-toolbar no-swipeback">
      <div class="page-content login-screen-content">
        <div class="login-screen-title">{{ title }}</div>
          <div class="list">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Username</div>
                  <div class="item-input">
                    <input type="text"
                           placeholder="Your username"
                           v-model="params.email">
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Password</div>
                  <div class="item-input">
                    <input type="password"
                           placeholder="Your password"
                           v-model="params.password">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="list">
            <f7-col>
              <f7-button @click="logIn(title)">{{$t('home.login')}}</f7-button>
            </f7-col>
            <div class="block-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <f7-col>
                <f7-button @click="logIn">{{$t('home.closeLoginForm')}}</f7-button>
              </f7-col>
            </div>
          </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
  },
  data() {
    return {
      params: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    logIn(type) {
      if (type === 'register') {
        this.$store.dispatch('user/REGISTER_NOW', this.params)
      } this.$store.dispatch('user/LOGIN_NOW', this.params);
      this.isActiveLogin();
    }
  }
}
</script>
