import Vue from 'vue';
import App from './app.vue';
import store from '@/store';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';

import storeMixin from '@/mixins/store';
import lib from './plugins/lib';
import VueI18n from 'vue-i18n'
import language from '@/location'


// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

Vue.use(VueI18n);
Vue.use(lib);
Vue.mixin(storeMixin);

Framework7.use(Framework7Vue);

const localVue = new Vue();

const i18n = new VueI18n({
  locale: localVue.$_.has(store.state.user.language, '0')
    ? store.state.user.language : navigator.language.split('-')[0],
  messages: language,
});

new Vue({
  i18n,
  store,
  el: '#app',
  template: '<app/>',
  components: {
    app: App
  }
});
