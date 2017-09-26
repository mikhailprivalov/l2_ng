<template>
  <b-container fluid id="app">
    <b-row>
      <b-col md="4" lg="3">
        <SiteMenu/>
      </b-col>
      <b-col md="8" lg="9">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    }
  }
</script>
