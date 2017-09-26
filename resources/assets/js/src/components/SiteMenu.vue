<template>
  <div>
    <b-nav class="flex-column" id="exCollapsingNavbar3">
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name: 'sitemenu'
  }
</script>

<style>
  @media (min-width: 768px) {
    .bootstrap-vertical-nav .collapse {
      display: block;
    }
  }
</style>
