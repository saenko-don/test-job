<template>
  <f7-page>
    <f7-navbar title="Right Panel" back-link="Back"></f7-navbar>
    <f7-block strong>
      <p>Right panel content goes here</p>
    </f7-block>
    <f7-block-title>Load page in panel</f7-block-title>
    <f7-block-title>Load page in main view</f7-block-title>
    <f7-list>
      <f7-list-item link="/" title="About" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/" title="Form" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>
