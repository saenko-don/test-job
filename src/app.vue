<template>
  <f7-app :params="f7params">

    <f7-statusbar></f7-statusbar>

    <f7-view id="main-view" url="/"
             main
             class="safe-areas">
    </f7-view>

    <f7-panel left reveal side="left">
      <f7-view>
        <f7-page>
          <f7-list>
            <f7-list-item>
              <f7-col>
                <f7-button @click="onLogin('login')"
                           panel-close>{{$t('app.login')}}</f7-button>
              </f7-col>
            </f7-list-item>
            <f7-list-item>
              <f7-col>
                <f7-button @click="onLogin('register')"
                           panel-close>{{$t('app.register')}}</f7-button>
              </f7-col>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

  </f7-app>
</template>

<script>
import routes from './routes.js'

export default {
  data() {
    return {
      f7params: {
        panel: { swipe: 'both' },
        id: 'io.framework7.testapp',
        name: 'app',
        theme: 'auto',
        routes: routes,
      },
    }
  },

  created() {
    this.wsUpdater();
  },
  methods: {
    onLogin(type) {
      this.storeStateTitleLogin = type;
      if (!this.storeStateIsActiveLoginForm) {
        this.isActiveLogin()
      }
    },

    wsUpdater() {
      const socket = new WebSocket('wss://echo.websocket.org');
      socket.onopen = function(event) {
        alert("Получены данные " + event.type);
      };
    },
  }
}
</script>
