import Vue from 'vue';
import store from '@/store';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';

import storeMixin from '@/mixins/store';
import lib from './plugins/lib';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

import App from './app.vue';

Vue.use(lib);
Vue.mixin(storeMixin);

Framework7.use(Framework7Vue);

new Vue({
  store,
  el: '#app',
  template: '<app/>',
  components: {
    app: App
  }
});
