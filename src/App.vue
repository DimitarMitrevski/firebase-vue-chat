<template>
  <div>
    <header>
      <ul class="nav">
        <li v-if="state.user == null">
          <router-link to="/login">Login</router-link> |
        </li>

        <li v-if="state.user == null">
          <router-link to="/register">Register</router-link>|
        </li>
        <li v-if="state.user != null">@{{ state.user.displayName }} |</li>
        <button v-if="state.user != null" class="logout" @click="Logout">
          Logout
        </button>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      user: null,
    });
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          state.user = user;
          if (route.path == "/login" || route.path == "/register") {
            router.replace("/rooms");
          }
        } else {
          state.user = null;
          router.replace("/login");
        }
        // router.replace('/login');
        // } else if (route.path == "/login" || route.path ==
        // '/register') {
        //   router.replace('/');
        // }
      });
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Successful signout!");
        })
        .catch((e) => console.log(e));
    };
    return {
      state,
      Logout,
    };
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
  display: inline;
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
