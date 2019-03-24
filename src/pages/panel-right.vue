<template>
  <f7-page>
    <f7-navbar :title="$t('panel_right.title')"
               :back-link="$t('panel_right.back_link')"></f7-navbar>
    <f7-block strong>
      <p>{{ $t('panel_right.p_1') }}</p>
    </f7-block>
    <f7-list>
      <f7-list-item link="/settings/"
                    :title="$t('panel_right.settings')"
                    view="#main-view"
                    panel-close>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>
