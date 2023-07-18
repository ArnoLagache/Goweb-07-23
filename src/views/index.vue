<template>
  <div>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "@/components/Menu/";

export default {
  /* eslint-disable */
  name: "Index",

  components: {
    Menu,
  },
};
</script>
