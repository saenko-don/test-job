<template>
  <f7-page infinite
           :infinite-distance="50"
           :infinite-preloader="storeState.showPreloader"
           @infinite="loadMore"
           ptr
           @ptr:refresh="loadMoreSwype">
    <f7-navbar title="My test job">
      <div class="navbar-inner">
        <f7-nav-right>
          <f7-link href="/panel-right/">
            <i class="f7-icons">menu</i>
          </f7-link>
        </f7-nav-right>
      </div>
    </f7-navbar>
    <login-form v-if="storeState.isActiveLoginForm"
                :title="titleLogin">
    </login-form>
    <f7-list class="no-margin"
             v-if="!storeState.isActiveLoginForm">
      <f7-list-item v-for="(item, index) in items"
                    :title="`Item ${item}`"
                    :key="index">
      </f7-list-item>
    </f7-list>
    <f7-panel left reveal side="left">
      <f7-view>
        <f7-page>
          <f7-list>
            <f7-list-item>
              <f7-col>
                <f7-button @click="onLogin('login')"
                           panel-close>{{$t('home.login')}}</f7-button>
              </f7-col>
            </f7-list-item>
            <f7-list-item>
              <f7-col>
                <f7-button @click="onLogin('register')"
                           panel-close>Register now</f7-button>
              </f7-col>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-page>
</template>
<script>
  import LoginForm from '@/components/login.vue';

  export default {
    components: { LoginForm},
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        isActiveUser: false,
        titleLogin: '',
      }
    },

    methods: {

      loadMoreSwype(event, done) {
        const self = this;

        setTimeout(() => {
          const itemsLength = self.items.length;
          self.items.push(itemsLength + 1);
          done();
        }, 1000);
      },
      loadMore() {
        const self = this;
        if (!self.storeState.allowInfinite) return;
        self.storeState.allowInfinite = false;

        setTimeout(() => {
          if (self.items.length >= 200) {
            self.storeState.showPreloader = false;
            return;
          }

          const itemsLength = self.items.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items.push(itemsLength + i);
          }

          self.storeState.allowInfinite = true;
        }, 1000);
      },
      onLogin(type) {
        this.$i18n.locale = 'ru';
        this.titleLogin = type;
        this.isActiveLogin();
      },
    }
  }
</script>
