<template>
  <f7-page>
    <div class="page no-navbar no-toolbar no-swipeback">
      <div class="page-content login-screen-content">
        <div class="login-screen-title"
             v-text="storeStateTitleLogin === 'login' ? $t('login.title_login'):$t('login.title_register')">
        </div>
          <div class="list">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">{{ $t('login.user_name') }}</div>
                  <div class="item-input">
                    <input type="text"
                           :placeholder="$t('login.input_placeholder.name')"
                           v-model="params.email">
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">{{ $t('login.password') }}</div>
                  <div class="item-input">
                    <input type="password"
                           :placeholder="$t('login.input_placeholder.password')"
                           v-model="params.password">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="list">
            <f7-col>
              <f7-button @click="logIn(title)"
                         v-text="storeStateTitleLogin === 'login'
                            ? $t('login.login_form.login'):$t('login.login_form.register')">
              </f7-button>
            </f7-col>
            <div class="block-footer">
              <p>{{$t('login.p_1')}}</p>
              <f7-col>
                <f7-button @click="logIn('close')"
                           v-text="storeStateTitleLogin === 'login'
                              ? $t('login.login_form.close_login_form'):$t('login.login_form.close_register_form')">
                  </f7-button>
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
      if (type === 'close') {
        this.isActiveLogin();
      } else {
        if (type === 'register') {
        this.$store.dispatch('user/REGISTER_NOW', this.params)
      } this.$store.dispatch('user/LOGIN_NOW', this.params);
        this.isActiveLogin();
      }
    }
  },
}
</script>
