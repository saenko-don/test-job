<template>
  <f7-page :page-content="false">
    <f7-navbar title="Settings" back-link="Back">
      <f7-subnavbar>
        <f7-segmented raised>
          <f7-button tab-link="#tab1" tab-link-active>Language</f7-button>
          <f7-button tab-link="#tab2">Tab 2</f7-button>
          <f7-button tab-link="#tab3">Tab 3</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>
    <f7-tabs>
      <f7-tab id="tab1" tab-active class="page-content">
        <f7-block>
          <f7-menu>
            <f7-menu-item text="Language" dropdown>
              <f7-menu-dropdown left>
                <f7-menu-dropdown-item text="Russian" @click="setLanguage('ru')"></f7-menu-dropdown-item>
                <f7-menu-dropdown-item text="English" @click="setLanguage('en')"></f7-menu-dropdown-item>
              </f7-menu-dropdown>
            </f7-menu-item>
          </f7-menu>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab2" class="page-content">
        <f7-block>
          <p>Donec iaculis posuere massa sed dignissim. Praesent id nibh nec massa mollis egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...</p>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab3" class="page-content">
        <f7-block>
          <p>Donec iaculis posuere massa sed dignissim. Praesent id nibh nec massa mollis egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...</p>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
  export default {
    name: "settings",
    methods: {
      setLanguage(lng) {
        this.storeUser.language = lng;
      }
    }
  }
</script>

<style scoped>
  .tab-link-active {
    color: #fff;
  }
</style>
