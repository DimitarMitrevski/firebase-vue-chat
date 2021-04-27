import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyByYD1ZdxGgNG1SgFAkIOaRs74M9384Gx4",
  authDomain: "fir-vue-chat-72ac2.firebaseapp.com",
  databaseURL: "https://fir-vue-chat-72ac2-default-rtdb.firebaseio.com",
  projectId: "fir-vue-chat-72ac2",
  storageBucket: "fir-vue-chat-72ac2.appspot.com",
  messagingSenderId: "654791417974",
  appId: "1:654791417974:web:e60da6ef41d856ae2fbf57"
};

const db = firebase.initializeApp(config);

export const rt = firebase.firestore();
export default db;
