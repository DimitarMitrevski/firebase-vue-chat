import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Rooms from "../views/Rooms.vue";
import Chat from "../views/Chat.vue";
import firebase from "../db";

function isAuthenticated(to, from, next) {
  const user = firebase.auth().currentUser;
  if (user) {
    next();
    return true;
  } else {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
    return false;
  }
}
function blockRoutes(to, from, next) {
  const user = firebase.auth().currentUser;
  if (user) {
    next({ path: "/rooms" });
    return true;
  } else {
    next();
    return false;
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: [blockRoutes],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: [blockRoutes],
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
    beforeEnter: [isAuthenticated],
  },
  {
    path: "/chat/:br",
    name: "Chat",
    component: Chat,
    beforeEnter: [isAuthenticated],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name == "Login" && isAuthenticated) next({ name: "Rooms" });
//   else next();
// });
export default router;
