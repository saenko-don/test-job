<template>
  <f7-page infinite
           :infinite-distance="50"
           :infinite-preloader="storeStatePreloader"
           @infinite="loadMore"
           ptr
           @ptr:refresh="loadMoreSwype">
    <f7-navbar :title="$t('home.title')">
      <f7-nav-right>
        <f7-link href="/panel-right/">
          <f7-icon material="menu"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <login-form v-if="storeStateIsActiveLoginForm">
    </login-form>
    <f7-list class="no-margin"
             v-if="!storeStateIsActiveLoginForm">
      <f7-list-item v-for="(item, index) in items"
                    :title="`Item ${item}`"
                    :key="index">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  import LoginForm from '@/components/login.vue';

  export default {
    components: { LoginForm},
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
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
        if (!self.storeStateAllowInfinite) return;
        self.storeStateAllowInfinite = false;

        setTimeout(() => {
          if (self.items.length >= 200) {
            self.storeStatePreloader = false;
            return;
          }
          const itemsLength = self.items.length;
          for (let i = 1; i <= 20; i += 1) {
            self.items.push(itemsLength + i);
          }
          self.storeStateAllowInfinite = true;
        }, 1000);
      },
    }
  }
</script>
