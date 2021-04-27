<template>
  <div>
    <header>
      <ul class="nav">
        <li><router-link to="/login">Login</router-link></li>
        |
        <li><router-link to="/rooms">Rooms</router-link></li>
        |
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(() => {
      // firebase.auth().onAuthStateChanged((user) => {
      //   if(!user) {
      //     router.replace('/login');
      //   } else if (route.path == "/login" || route.path ==
      //   '/register') {
      //     router.replace('/');
      //   }
      // });
    });
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 40px;
  text-align: center;
  overflow: hidden;
  background-color: rgb(113, 192, 238);
}

li a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  width: 100px;
}
ul.nav li {
  display: inline-block;
  width: 100px;
}

li a:hover:not(.active) {
  background-color: rgb(113, 192, 238);
}

.active {
  background-color: #4caf50;
}
</style>
