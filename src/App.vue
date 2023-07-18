<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
