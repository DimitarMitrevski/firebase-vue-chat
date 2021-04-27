import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Rooms from "../views/Rooms.vue"
import Chat1 from "../views/Chat1.vue"
import Chat2 from "../views/Chat2.vue"
import Chat3 from "../views/Chat3.vue"
import Chat4 from "../views/Chat4.vue"
import PrivateChat from "../views/PrivateChat.vue";

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/chat1",
    name: "Chat1",
    component: Chat1,
  },
  {
    path: "/chat2",
    name: "Chat2",
    component: Chat2,
  },
  {
    path: "/chat3",
    name: "Chat3",
    component: Chat3,
  },
  {
    path: "/chat4",
    name: "Chat4",
    component: Chat4,
  },
  {
    path: "/privateChat",
    name: "PrivateChat",
    component: PrivateChat,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
