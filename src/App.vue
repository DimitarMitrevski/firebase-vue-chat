<template>
  <div>
    <header>
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        |
        <li><router-link to="/about">About</router-link></li>
        |
        <li><router-link to="/register">Register</router-link></li>
        |
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 40px;
  text-align: center;
}
ul.nav li {
  display: inline-block;
  width: 100px;
}
</style>
