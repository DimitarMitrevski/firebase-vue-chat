<template>
  <div>
    <button class="grey-btn" @click="createChat">Create a chat</button>
    <div class="grid-container">
      <div class="chat" v-for="(chat, i) in state.chats" :key="i">
        <router-link class="item" :to="`/chat/${chat.id}`"
          >Chat {{ chat.id }}</router-link
        >
        <p>This chat is created by:{{ chat.createdBy }}</p>
        <p>
          This chat was created at
          {{ date(chat.timestamp) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive } from "vue";
import db from "../db";

export default defineComponent({
  data() {
    return {
      chats: [{ uid: 1 }, { uid: 2 }, { uid: 3 }],
    };
  },
  methods: {
    date(time) {
      const date = new Date(time);
      return date.toUTCString();
    },
  },
  setup() {
    const state = reactive({
      chats: [],
    });
    const createChat = async () => {
      const user = db.auth().currentUser;
      console.log(user.email);
      const key = db
        .database()
        .ref()
        .child("posts")
        .push().key;
      await db
        .database()
        .ref(`/chats/${key}`)
        .set({ createdBy: user.displayName, timestamp: Date.now() })
        .then(() => console.log("success"))
        .catch((e) => console.log(e));
    };
    onMounted(() => {
      const chatRef = db.database().ref("chats");
      chatRef.on("value", (snapshot) => {
        const data = snapshot.val();
        let chats = [];
        Object.keys(data).forEach((key) => {
          chats.push({
            id: key,
            createdBy: data[key].createdBy,
            timestamp: data[key].timestamp,
          });
        });
        state.chats = chats.sort((a, b) => {
          const aTime = a.timestamp;
          const bTime = b.timestamp;
          let comparison = 0;
          if (aTime > bTime) {
            comparison = -1;
          } else if (bTime > aTime) {
            comparison = 1;
          }
          return comparison;
        });
      });
    });
    return {
      createChat,
      state,
    };
  },
});
</script>

<style lang="scss">
body {
  background-color: rgb(113, 192, 238);
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-gap: 20px;
  background-color: rgb(113, 192, 238);
  margin: 10px auto;
  padding: 0px 40px 0px 40px;
}

.grey-btn {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: rgb(113, 192, 238);
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 100px 0;
  font-size: 30px;
  transition: 0.4s;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
}

.grid-container .item {
  text-decoration: none;
  color: #888;
}
</style>
