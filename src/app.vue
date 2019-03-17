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
}
</script>
