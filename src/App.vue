<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Circle Products",
    titleTemplate: "%s | Back Office",
    htmlAttrs: {
      lang: "fr-FR",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Testing an app in Vue.js",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  margin: auto;
}
</style>
