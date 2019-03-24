<template>
  <f7-page :page-content="false">
    <f7-navbar :title="$t('settings.title')"
               :back-link="$t('settings.back_link')">
      <f7-subnavbar>
        <f7-segmented raised>
          <f7-button tab-link="#tab1" tab-link-active>{{ $t('settings.tabs.tab_1') }}</f7-button>
          <f7-button tab-link="#tab2">{{ $t('settings.tabs.tab_2') }}</f7-button>
          <f7-button tab-link="#tab3">{{ $t('settings.tabs.tab_3') }}</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>
    <f7-tabs>
      <f7-tab id="tab1" tab-active class="page-content">
        <f7-block>
          <f7-menu>
            <f7-menu-item :text="$t('settings.tab_1.language_title')" dropdown>
              <f7-menu-dropdown left>
                <f7-menu-dropdown-item v-for="(item, index) in languageList"
                                       v-if="item.value !== $i18n.locale"
                                       :key="index"
                                       :text="item.name" @click="setLanguage(item.value)">
                </f7-menu-dropdown-item>
              </f7-menu-dropdown>
            </f7-menu-item>
          </f7-menu>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab2" class="page-content">
        <f7-block>
          <p>{{ $t('settings.tab_2.p_1') }}</p>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab3" class="page-content">
        <f7-block>
          <p>{{ $t('settings.tab_3.p_1') }}</p>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
  export default {
    name: "settings",
    data() {
      return {
        languageList: [
          {name: 'Русский', value: 'ru'},
          {name: 'English', value: 'en'}
        ]
      }
    },
    methods: {
      setLanguage(lng) {
        this.storeUserLanguage = lng;
      }
    }
  }
</script>

<style scoped>
  .tab-link-active {
    color: #fff;
  }
</style>
