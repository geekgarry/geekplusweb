<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>