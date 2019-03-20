<template>
  <f7-app :params="f7params">

    <f7-statusbar></f7-statusbar>

    <f7-view id="main-view" url="/"
             main
             class="safe-areas">
    </f7-view>

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
    this.storeUser.language = navigator.language.split('-')[0];
    this.wsUpdater();
  },
  methods: {
    wsUpdater() {
      const socket = new WebSocket('wss://echo.websocket.org');
      socket.onopen = function(event) {
        alert("Получены данные " + event.type);
      };
    },
  }
}
</script>
