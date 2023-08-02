<template>
  <div>
    <nav :class="{ 'nav-show': toggleMenu }">
      <img
        alt="Circle Products logo"
        title="Circle Products"
        class="logo"
        src="@/assets/images/logo.png"
      />

      <ul>
        <li><a href="#pathToDashboard">Dashboard</a></li>
        <li><router-link to="/">Product Management</router-link></li>
        <li><a href="#pathToEmpManagement">Employees Management</a></li>
      </ul>

      <a class="logout">Logout</a>

      <button class="close-btn" @click="toggleMenu = !toggleMenu">
        &#9587;
      </button>
    </nav>

    <button class="open-btn" @click="toggleMenu = !toggleMenu">&#9776;</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  /* eslint-disable */
  name: "Menu",

  //Ajout d'un état 'toggleMenu' afin d'ouvrir et fermer le menu en mobile/tablette
  data() {
    return {
      toggleMenu: false,
    };
  },
};
</script>

<style lang="scss">
@import "menu";
</style>
