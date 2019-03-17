<template>
  <f7-page>
    <div class="page no-navbar no-toolbar no-swipeback">
      <div class="page-content login-screen-content">
        <div class="login-screen-title">Log in</div>
          <div class="list">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Username</div>
                  <div class="item-input">
                    <input type="text"
                           placeholder="Your username"
                           v-model="userName">
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Password</div>
                  <div class="item-input">
                    <input type="password"
                           placeholder="Your password"
                           v-model="password">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="list">
            <f7-col>
              <f7-button @click="logIn">Log in</f7-button>
            </f7-col>
            <div class="block-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <f7-col>
                <f7-button @click="logIn">Close Login Screen</f7-button>
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
      userName: '',
      password: '',
    }
  },

  methods: {
    logIn() {
      this.isActiveLogin();
    }
  }
}
</script>
